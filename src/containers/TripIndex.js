import React, { Component } from 'react'
import TripContainer from './TripContainer'
import CreateTripContainer from './CreateTripContainer'

class TripIndex extends Component {

  state = {
    trips: [],
    show: false
  }

  handleShowForm = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
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
    .then(res => res.json())
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
        {this.state.show ? 
        <CreateTripContainer user={this.props.userTrips} addTrip={this.addTrip} /> : null}
        <TripContainer trips={this.state.trips} handleTripClick={this.props.handleTripClick} handleDelete={this.handleDelete} handleShowForm={this.handleShowForm} />
      </div>
    );
  }
}

export default TripIndex