import React, { Component } from "react";
import TripPageDetails from '../components/TripPageDetails'

class TripPageContainer extends Component {

  state = {
    trip: "",
    name: "",
    location: "",
    image: "",
    category: "",
    date: "",
    notes: ""
  }
  
  fetchTripDetails = () => {
    let tripId = this.props.selectedTrip.id
    // console.log(tripId)
    fetch(`http://localhost:3000/trips/${tripId}`)
    .then(res => res.json())
    .then(data => this.setState({
      trip: data,
      name: data.name,
      location: data.location,
      image: data.image,
      category: data.category,
      date: data.date,
      notes: data.notes
    }, () => console.log(data)))
  }

  componentDidMount() {
    this.fetchTripDetails();
  }

  updateDetails = (patch) => {
    this.setState({
      trip: patch
    })
  }

  updateItems = (itemObj) => {
    let newItems = this.state.trip
    newItems.items.push(itemObj)
    this.setState({
      trip: newItems
    })
  }

  updateStops = (stopObj) => {
    let newStops = this.state.trip
    newStops.stops.push(stopObj)
    this.setState({
      trip: newStops
    })
  }

  handleEditInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        {/* {console.log(this.state.trip)} */}
        <TripPageDetails user={this.props.user} trip={this.state.trip} updateDetails={this.updateDetails} handleEditInput={this.handleEditInput} formData={this.state} updateItems={this.updateItems} updateStops={this.updateStops}/>
      </div>
    )
  }
}

export default TripPageContainer