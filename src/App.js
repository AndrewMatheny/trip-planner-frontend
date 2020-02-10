import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm'
import CreateTripContainer from './containers/CreateTripContainer'
// import SigninContainer from './SigninContainer';

// import ButtonExampleButton from './Btn.js' //Semantic UI button
// import logo from './logo.svg';
// import './App.css';
import background from './images/background_road.jpg'
// let background = 'https://www.smartertravel.com/uploads/2017/06/road_trip_tips_hero-1400x500.jpg'

import TripIndex from './TripIndex';

class App extends React.Component {

  state = {
    userTrips: null,
    selectedTrip: "",
    selected: false,
    isLoaded: false
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

  componentDidMount() {
    this.getTrips()
  }

  render() {
    return (
      // <div style={this.backgroundStyle}>
      //   <Router>
      //     <NavBar />

         
      //     <LogInForm /> 
      //     <Route 
      //     path="/createtrip" 
      //     exact 
      //     render={props => <CreateTripContainer {...props} user={this.state.userTrips}/>}/>
            
      //     {/* <TripContainer /> */}
      //     {/* <SigninContainer /> */}
      //   </Router>
      // </div>
      <div style={this.backgroundStyle}>

        <NavBar />
        {/* <LogInForm />  */}
        <TripIndex />
        {/* <SigninContainer /> */}

          <CreateTripContainer user={this.state.userTrips}/>
            
          {/* <TripContainer /> */}

      </div>
    );
  }
}

export default App;