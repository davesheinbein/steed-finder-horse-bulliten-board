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
    console.log(newHorse);
    this.setState(state => ({
      horses: [...state.horses, newHorse]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/'));
    console.log(this.setState);
  }

  handleUpdateHorse = async updatedHorseData => {
    const updatedHorse = await horseServices.update(updatedHorseData);
    // Using map to replace just the puppy that was updated
    const newHorseArray = this.state.horses.map(h =>
      h._id === updatedHorse._id ? updatedHorse : h
    );
    this.setState(
      { horses: newHorseArray },
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
  }

  handleDeleteHorse = async id => {
    await horseServices.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      horses: state.horses.filter(h => h._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    console.log('components mounted');
    const horses = await horseServices.index();
    this.setState({ horses });
    console.log(this.state);

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
