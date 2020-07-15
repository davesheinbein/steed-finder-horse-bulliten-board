import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import HorseMarketplace from '../../components/HorseMarketplace/HorseMarketplaces';
import ListHorse from '../../components/ListHorse/ListHorse';
import HorseCard from '../../components/HorseCard/HorseCard';
import Barn from '../../components/BarnImg/BarnImg'
import Footer from '../../components/Footer/Footer'
import userService from '../../services/userServices'
import horsesServices from '../../services/horseServices'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


class App extends Component {
  /*--- State ---*/
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      horses: [],
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {
      horses: '',
      isAvailable: true
    };
  }
  /*--- Handle Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const scores = await horsesServices.index();
    this.setState({ horses });
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
              <HorseMarketplace />
              <ListHorse />
              <HorseCard />
            </div>
          } />
          <Route exact path='/all' render={() =>
            <div>
              <HorseCard />
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
