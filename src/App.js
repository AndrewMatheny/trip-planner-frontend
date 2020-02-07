import React from 'react';
import NavBar from './components/NavBar'

// import ButtonExampleButton from './Btn.js' //Semantic UI button
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  state = {
    userTrips: [],
    selectedTrip: "",
    selected: false
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
      <div>
        <NavBar />
        {/* <TripContainer /> */}
      </div>
    );
  }
}

export default App;