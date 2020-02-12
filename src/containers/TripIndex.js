import React, { Component } from 'react'
import TripContainer from './TripContainer'

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

  handleDelete = (trip) => {
    fetch(`http://localhost:3000/trips/${trip.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    // .then(this.deleteState(trip))
    .then(res => res.json())
    // .then(console.log)
    .then(trip => this.deleteState(trip))
  }

  deleteState = (selectedTrip) => {
    let deleteTrip = this.state.trips.filter(trip => {
      return trip.id !== selectedTrip.id
    })
    this.setState({
      trips: deleteTrip
    })
  }

  render() {
    return (
      <div >
        <TripContainer trips={this.state.trips} handleTripClick={this.props.handleTripClick} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default TripIndex