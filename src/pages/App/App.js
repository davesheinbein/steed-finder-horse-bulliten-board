import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// Components
import NavBar from '../../components/NavBar/NavBar';
import Barn from '../../components/BarnImg/BarnImg'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Team from '../../components/Team/Team'
import Disclaimer from '../../components/Disclaimer/Disclaimer'
// Pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddListHorsePage from '../../pages/AddListHorsePage/AddListHorsePage';
import HorseMarketplacePage from '../../pages/HorseMarketplacePage/HorseMarketplacePage';
import HorseDetailPage from '../../pages/HorseDetailsPage/HorseDetailsPage';
import EditHorsePage from '../../pages/EditHorsePage/EditHorsePage';
// Services
import userService from '../../services/userServices';
import horseServices from '../../services/horseServices';
import commentServices from '../../services/commentServices';
// import prApi from '../../services/pr-api';



class App extends Component {
  /*--- State ---*/
  constructor() {
    super();
    this.state = {
      horses: [],
      user: userService.getUser(),
      // animalBreed: [] // for potential Api
    };
  }

  /*--- Accessing API Methods ---*/
  // getAnimalsBreed = (idx) => {
  //   return this.state.animalBreed[idx];
  // }

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
    this.setState(
      { horses: newHorseArray },
      () => this.props.history.push('/marketplace')
    );
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
    this.setState(
      { horses: newHorseArray }

    );
  }

  handleDeleteComment = async id => {
    // console.log('hitting handle delete');
    const deleteRes = await commentServices.delete(id);
    const horsesCopy = this.state.horses
    console.log(deleteRes, '<<<< deleteRes');
    const newHorses = horsesCopy.map((horse) => {
      if (horse._id == deleteRes._id) {
        return deleteRes
      } else {
        return horse
      }
    });

    this.setState({ horses: newHorses })
    this.props.history.push({
      pathname: '/details',
      state: { horse: deleteRes }
    });
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
    // console.log('Hitting ComponentDidMount');
    // Left off here <-------------------------------------------<<<<<<<<<<<<<<<
    // const animalBreed = await prApi.getAllBreeds();
    // console.log('animalBreed components mounted');


    this.getAll()

    // Left off here <-------------------------------------------<<<<<<<<<<<<<<<
    // this.setState({
    //   animalBreed: animalBreed.results
    // });
    // console.log(animalBreed);

    // console.log(this.state);
  }

  render() {
    console.log("we are re rendering");

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
              <About />
              <Team />
              <Disclaimer />
            </div>
          } />
          <Route exact path='/marketplace' render={() =>
            <div>
              <HorseMarketplacePage
                user={this.state.user}
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
                user={this.state.user}
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
