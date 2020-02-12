import React, { Component } from 'react'
import TripContainer from './TripContainer'
import CreateTripContainer from '../containers/CreateTripContainer'

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

  addTrip = (trip) => {
    console.log(trip)
    let newTrips = this.state.trips
    newTrips.push(trip)
    this.setState({
      trips: newTrips
    })
  }



  render() {
    return (
      <div>
        <TripContainer trips={this.state.trips} handleTripClick={this.props.handleTripClick}/>
        <CreateTripContainer user={this.props.userTrips} addTrip={this.addTrip}/>
      </div>
    );
  }
}

export default TripIndex