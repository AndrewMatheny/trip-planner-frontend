import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm'
// import CreateTripContainer from './containers/CreateTripContainer'
import TripPageContainer from './containers/TripPageContainer'
import TripIndex from './containers/TripIndex';
import CreateUserForm from './containers/CreateUserForm'
import background from './images/background_road.jpg'
import './App.css'

// let currentUser = localStorage.getItem('currentUser')

class App extends React.Component {

  state = {
    userTrips: null,
    allUsers: [],
    selectedTrip: "",
    selected: false,
    isLoaded: false,
    loggedIn: false,
    enteredUser: ""
  }

  backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundAttachment: 'fixed',
    
}

  getTrips = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(res => res.json())
    .then(data => this.setState({
      userTrips: data
    }, () => this.setLocalUser(userId)))
  }

  setLocalUser = (id) => {
    localStorage.setItem('currentUser', `${id}`)
  }

  logoutUser = () => {
    localStorage.clear()
    this.setState({
      userTrips: null,
      allUsers: [],
      selectedTrip: "",
      selected: false,
      isLoaded: false,
      loggedIn: false,
      enteredUser: ""
    })
  }

  getUsers = () => {
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(data => this.setState({
      allUsers: data
    }))
  }

  matchUser = enteredName => {
    this.state.allUsers.forEach(user => {
      if(user.username === enteredName) {
        this.setState({
          loggedIn: user.id
        }, () => this.getTrips(this.state.loggedIn))
      }
    })
  }

  handleLogin = (e) => {
    let userName = e.target.username.value
    this.setState({
      enteredUser: userName
    }, () => this.matchUser(this.state.enteredUser))
  }

  componentDidMount() {
    this.getUsers()
    // this.getTrips()
    
  }

  selectTrip = (trip) => {
    console.log(trip)
    this.setState({
      selectedTrip: trip, 
      selected: true
    })
  }

  // addTrip = (trip) => {
  //   this.setState(prevState => ({
  //     userTrips: [...prevState, trip]
  //   }))
  // }

  login = () => {
    if(localStorage.getItem("currentUser")) {
      let userId = localStorage.getItem("currentUser")
      this.setState({
        loggedIn: userId
      })
    }
  }

  showPage = () => {
    // this.login()
    if(this.state.loggedIn) {
      return  ( 
        <div>
      {/* <div style={this.backgroundStyle}> */}
        <Router>
          <NavBar logout={this.logoutUser}/>
          <Route 
            path="/"
            exact
            render={props => <TripIndex {...props} user={this.state.loggedIn} userTrips={this.state.userTrips} handleTripClick={this.selectTrip}/>} />
          <Route 
            path="/trip/:id"
            render={props => <TripPageContainer {...props} selectedTrip={this.state.selectedTrip} user={this.state.userTrips}/>}/>
          {/* <TripPageContainer user={this.state.userTrips}/> */}
          <CreateUserForm />
        </Router>
      </div>
      )
    } else {
      return (
      <div style={this.backgroundStyle}>
        <Router>
          <NavBar logout={this.logoutUser}/>
        <Route 
        path="/"
        exact
        render={props => <LogInForm {...props} handleSubmit={this.handleLogin}/>}/>
        
        </Router>
        </div> ) 
    }
  }

  render() {
    return (
      <div className="whole-page" >
      {this.showPage()}
      </div>
      // <div style={this.backgroundStyle}>
      // //   <Router>
      // //     <NavBar />
      // //     <LogInForm /> 
      // //     <Route 
      //     path="/createtrip" 
      //     exact 
      //     render={props => <CreateTripContainer {...props} user={this.state.userTrips}/>}/>
            
      //     {/* <TripContainer /> */}
      //     {/* <SigninContainer /> */}
      //   </Router>
      // </div>
    );
  }
}

export default App;