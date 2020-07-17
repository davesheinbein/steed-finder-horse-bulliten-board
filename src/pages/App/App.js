import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
// import HorseCard from '../../components/HorseCard/HorseCard';
import Barn from '../../components/BarnImg/BarnImg'
import Footer from '../../components/Footer/Footer'

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddListHorsePage from '../../pages/AddListHorsePage/AddListHorsePage';
import HorseMarketplacePage from '../../pages/HorseMarketplacePage/HorseMarketplacePage';
import HorseDetailPage from '../../pages/HorseDetailsPage/HorseDetailsPage';
import EditHorsePage from '../../pages/EditHorsePage/EditHorsePage';

import userService from '../../services/userServices';
import horseServices from '../../services/horseServices';
import commentServices from '../../services/commentServices';


class App extends Component {
  /*--- State ---*/
  constructor() {
    super();
    this.state = {
      horses: [],
      user: userService.getUser()
    };
  }

  /*--- Handle Methods ---*/

  // Handle Horses
  handleAddHorse = async newHorseData => {
    const newHorse = await horseServices.create(newHorseData);
    // console.log(newHorse);
    this.setState(state => ({
      horses: [...state.horses, newHorse]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/'));
    // console.log(this.setState);
  }

  handleUpdateHorse = async updatedHorseData => {
    console.log('hitting update horse');
    const updatedHorse = await horseServices.update(updatedHorseData);
    const newHorseArray = this.state.horses.map(h =>
      h._id === updatedHorse._id ? updatedHorse : h
    );
    // console.log(newHorseArray, 'newHorseArray');
    this.setState(
      { horses: newHorseArray },
      // This cb function runs after state is updated
      () => this.props.history.push('/marketplace')
    );
    // console.log(this.setState, 'this.setState');
  }

  handleDeleteHorse = async id => {
    console.log('hitting handle delete');
    await horseServices.delete(id);
    this.setState(state => ({
      horses: state.horses.filter(h => h._id !== id)
    }), () => this.props.history.push('/marketplace'));
    // console.log(this.setState, 'this.setState');
  }

  // Handle comments
  handleAddComment = async (id, newCommentData) => {
    const comAwait = await commentServices.create(id, newCommentData);
    // console.log(comAwait);
    const newHorseArray = this.state.horses.map(h => {
      if (h._id === id) {
        h.comments = comAwait.comments
      } else {
      }
      return h
    }
    );
    // console.log(newHorseArray, 'newHorseArray with comments');
    this.setState(
      { horses: newHorseArray },
      // This cb function runs after state is updated
      () => this.props.history.push('/details')
    );    // console.log(this.setState);
  }

  handleDeleteComment = async id => {
    console.log('hitting handle delete');
    const deleteRes = await commentServices.delete(id);
    console.log(deleteRes, 'deleteRes');
    // console.log(deleteRes.json(), 'deleteRes.json');
    
    this.getAll() // need this DON'T DELETE
    // Need to Fix handleDeleteComment
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/

  getAll = async () => {
    const horses = await horseServices.index();
    console.log(horses, '< hitting!');
    this.setState({ horses });

  }

  componentDidMount = () => {
    // console.log('components mounted');
    this.getAll()
    // console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <div>
              <Barn />
            </div>
          } />
          <Route exact path='/marketplace' render={() =>
            <div>
              <HorseMarketplacePage
                horses={this.state.horses}
                handleDeleteHorse={this.handleDeleteHorse}
              />
            </div>
          } />
          <Route exact path='/addlisthorse' render={() =>
            <div>
              <AddListHorsePage
                horses={this.state.horses}
                handleAddHorse={this.handleAddHorse}
              />
            </div>
          } />
          <Route exact path='/details' render={({ location }) =>
            <div>
              <HorseDetailPage
                horses={this.state.horses}
                comments={this.state.horses.comments} // New
                location={location}
                handleUpdateHorse={this.handleUpdateHorse}
                handleDeleteHorse={this.handleDeleteHorse}
                handleAddComment={this.handleAddComment}
                handleDeleteComment={this.handleDeleteComment}
              />
            </div>
          } />
          <Route exact path='/edit' render={({ location }) =>
            <div>
              <EditHorsePage
                handleUpdateHorse={this.handleUpdateHorse}
                location={location}
              />
            </div>
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
