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
    notes: "",
    show: false,
    itemShow: false,
    showStop: false
  }
  
  fetchTripDetails = () => {
    let tripId = this.props.selectedTrip.id
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
    }))
  }

  componentDidMount() {
    this.fetchTripDetails();
  }

  updateDetails = (patch) => {
    this.setState(prevState => ({
      trip: patch,
      show: !prevState.show
    }))
  }

  updateItems = (itemObj) => {
    let newItems = this.state.trip
    newItems.items.push(itemObj)
    this.setState(prevState => ({
      trip: newItems,
      itemShow: !prevState.itemShow
    }))
  }

  updateStops = (stopObj) => {
    let newStops = this.state.trip
    newStops.stops.push(stopObj)
    this.setState(prevState => ({
      trip: newStops,
      showStop: !prevState.showStop
    }))
  }

  handleEditInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEditShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  handleAddItemShow = () => {
    this.setState(prevState => ({
      itemShow: !prevState.itemShow
    }))
  }

  handleAddStopShow = () => {
    this.setState(prevState => ({
      showStop: !prevState.stopShow
    }))
  }


  deleteStop = (stop) => {
    fetch(`http://localhost:3000/stops/${stop.id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    // .then(console.log)
    .then(stop => this.removeStopState(stop))
    }
  

  removeStopState = (selectedStop) => {
    let stop = this.state.trip.stops.filter(stop => {
      return stop.id !== selectedStop.id
    })
    let currentTrip = this.state.trip
    currentTrip.stops = stop
    this.setState({
      trip: currentTrip
    })

  }

  deleteItem = (item) => {
    fetch(`http://localhost:3000/items/${item.id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    // .then(console.log)
    .then(item => this.removeItemState(item))
    }

  removeItemState = (selectedItem) => {
    let item = this.state.trip.items.filter(item => {
      return item.id !== selectedItem.id
    })
    let currentTrip = this.state.trip
    currentTrip.items = item
    this.setState({
      trip: currentTrip
    }, () => console.log(this.state))

  }

  render() {
    return (
      <div>
        <TripPageDetails 
        user={this.props.user} 
        trip={this.state.trip} 
        updateDetails={this.updateDetails} 
        handleEditInput={this.handleEditInput} 
        formData={this.state} 
        updateItems={this.updateItems} 
        updateStops={this.updateStops}
        deleteStop={this.deleteStop}
        deleteItem={this.deleteItem}
        handleEditShow={this.handleEditShow}
        show={this.state.show}
        itemShow={this.state.itemShow}
        handleAddItemShow={this.handleAddItemShow}
        showStop={this.state.showStop}
        handleAddStopShow={this.handleAddStopShow}
        />
      </div>
    )
  }
}

export default TripPageContainer