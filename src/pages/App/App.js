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
// import commentServices from '../../services/commentServices';


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
      console.log(this.setState, 'this.setState');
  }

  handleDeleteHorse = async id => {
    console.log('hitting handle delete');
    await horseServices.delete(id);
    this.setState(state => ({
      horses: state.horses.filter(h => h._id !== id)
    }), () => this.props.history.push('/marketplace'));
    console.log(this.setState, 'this.setState');
  }
  // handleAddComment = async newCommentData => {
  //   const newComment = await commentServices.create(newCommentData);
  //   // console.log(newComment);
  //   this.setState(state => ({
  //     comments: [...state.comments, newComment]
  //   }),
  //     // Using cb to wait for state to update before rerouting
  //     () => this.props.history.push('/'));
  //   // console.log(this.setState);
  // }

  // handleUpdateComment = async updatedCommentData => {
  //   console.log('hitting update comment');
  //   const updatedComment = await commentServices.update(updatedCommentData);
  //   const newCommentArray = this.state.comments.map(h =>
  //     h._id === updatedComment._id ? updatedComment : h
  //   );
  //   // console.log(newCommentArray, 'newCommentArray');
  //   this.setState(
  //     { comments: newCommentArray },
  //     // This cb function runs after state is updated
  //     () => this.props.history.push('/marketplace')
  //     );
  //     console.log(this.setState, 'this.setState');
  // }

  // handleDeleteComment = async id => {
  //   console.log('hitting handle delete');
  //   await commentServices.delete(id);
  //   this.setState(state => ({
  //     // Yay, filter returns a NEW array
  //     comments: state.comments.filter(c => c._id !== id)
  //   }), () => this.props.history.push('/marketplace'));
  //   console.log(this.setState, 'this.setState');
  // }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    // console.log('components mounted');
    const horses = await horseServices.index();
    this.setState({ horses });
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
                location={location}
                handleUpdateHorse={this.handleUpdateHorse}
                handleDeleteHorse={this.handleDeleteHorse}
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
