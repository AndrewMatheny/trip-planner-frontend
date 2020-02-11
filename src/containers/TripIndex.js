import React, { Component } from 'react';
import TripContainer from './TripContainer';

class TripIndex extends Component {

  state = {
    trips: []
  }


  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.user}`)
    .then(resp => resp.json())
    .then(json => 
      this.setState({
        trips: json.trips
      }))
  }



  render() {
    return (
      <div>
        <TripContainer trips={this.state.trips} handleTripClick={this.props.handleTripClick}/>
      </div>
    );
  }
}

export default TripIndex;