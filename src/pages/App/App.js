import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HorseMarketplace from '../../components/HorseMarketplace/HorseMarketplaces';
import AddListHorse from '../../components/AddListHorse/AddListHorse';
import HorseCard from '../../components/HorseCard/HorseCard';
import Barn from '../../components/BarnImg/BarnImg'
import Footer from '../../components/Footer/Footer'
import userService from '../../services/userServices'
import horsesServices from '../../services/horseServices'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
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
      {horses: newHorseArray},
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
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
    const horses = await horsesServices.index();
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
              <HorseMarketplace
                horses={this.state.horses}
              />
            </div>
          } />
          <Route exact path='/addlisthorse' render={() =>
            <div>
              <AddListHorse
                horses={this.state.horses}
                handleAddHorse={this.handleAddHorse}
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
