import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm'
import CreateTripContainer from './containers/CreateTripContainer'
import TripPageContainer from './containers/TripPageContainer'
import TripIndex from './containers/TripIndex';
import background from './images/background_road.jpg'

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
    height: '100vh'
}

  getTrips = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(res => res.json())
    .then(data => this.setState({
      userTrips: data
    }))
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

  showPage = () => {
    if(this.state.loggedIn) {
      return  (
      <div style={this.backgroundStyle}>
        <Router>
          <NavBar />
          <TripIndex user={this.state.loggedIn} userTrips={this.state.userTrips} handleTripClick={this.selectTrip}/>
          <Route 
            path="/trip/:id"
            render={props => <TripPageContainer {...props} user={this.state.userTrips}/>}/>
          {/* <CreateTripContainer user={this.state.userTrips}/>  */}
          {/* <TripPageContainer user={this.state.userTrips}/> */}
        </Router>
      </div>
      )
    } else {
      return (
      <div style={this.backgroundStyle}>
        <Router>
          <NavBar />
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
      this.showPage()
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