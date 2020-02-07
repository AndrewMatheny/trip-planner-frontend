import React from 'react';
import NavBar from './components/NavBar'

// import ButtonExampleButton from './Btn.js' //Semantic UI button
// import logo from './logo.svg';
// import './App.css';
import background from './images/background_road.jpg'
// let background = 'https://www.smartertravel.com/uploads/2017/06/road_trip_tips_hero-1400x500.jpg'

class App extends React.Component {

  state = {
    userTrips: [],
    selectedTrip: "",
    selected: false
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
      <div style={this.backgroundStyle}>
        <NavBar />
        {/* <TripContainer /> */}
      </div>
    );
  }
}

export default App;