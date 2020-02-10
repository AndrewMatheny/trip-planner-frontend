import React, { Component } from 'react';
import TripContainer from './TripContainer';

class TripIndex extends Component {

  state = {
    trips: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/trips')
    .then(resp => resp.json())
    .then(json => 
      this.setState({
        trips: json
      }))
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <TripContainer trips={this.state.trips} />
      </div>
    );
  }
}

export default TripIndex;