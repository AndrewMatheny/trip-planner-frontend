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

  handleEditInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        {console.log(this.state.trip)}
        <TripPageDetails user={this.props.user} trip={this.state.trip} updateDetails={this.updateDetails} handleEditInput={this.handleEditInput} formData={this.state}/>
      </div>
    )
  }
}

export default TripPageContainer