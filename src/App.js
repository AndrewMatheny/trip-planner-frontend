import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm'
import CreateTripContainer from './containers/CreateTripContainer'
import TripPageContainer from './TripPageContainer'

// import SigninContainer from './SigninContainer';
import TripIndex from './TripIndex';

// import ButtonExampleButton from './Btn.js' //Semantic UI button
// import logo from './logo.svg';
// import './App.css';
import background from './images/background_road.jpg'
// let background = 'https://www.smartertravel.com/uploads/2017/06/road_trip_tips_hero-1400x500.jpg'


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

  getTrips = () => {
    fetch(`http://localhost:3000/users/1`)
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
        })
      }
    })
  }

  handleLogin = (e) => {
    //   console.log(e.target.tripname.value)
    let userName = e.target.username.value
    this.setState({
      enteredUser: userName
    }, () => this.matchUser(this.state.enteredUser))
  }

  componentDidMount() {
    this.getUsers()
    this.getTrips()
    
  }

  showPage = () => {
    if(this.state.loggedIn) {
      return  (<div style={this.backgroundStyle}>

      <NavBar />


      {/* <LogInForm handleSubmit={this.handleLogin}/>  */}
      <TripIndex />
      {/* <SigninContainer /> */}
        <CreateTripContainer user={this.state.userTrips}/> 
      {/* <TripContainer /> */}
      <TripPageContainer />
    


    </div>
      )
    } else {
      return (<div style={this.backgroundStyle}>

      <NavBar />
      <LogInForm handleSubmit={this.handleLogin}/> 
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

    //----------------------------------------
      // <div style={this.backgroundStyle}>

      //   <NavBar />

        // <TripPageContainer />

      //   <LogInForm handleSubmit={this.handleLogin}/> 
      //   <TripIndex />
      //   {/* <SigninContainer /> */}
      //     <CreateTripContainer user={this.state.userTrips}/> 
      //   {/* <TripContainer /> */}
      //   <TripPageContainer />
      
      // </div>
    );
  }
}

export default App;