import React, { Component } from "react"
import { Form, Header, Input, TextArea, Button } from "semantic-ui-react";

class EditTripContainer extends Component{

  state = {
    userId: "",
    tripName: "",
    tripLocation: "",
    image: "",
    tripType: "",
    tripDate: "",
    tripNotes: ""
  }

  componentDidMount() {
    this.getTripDetails()
  }


  getTripDetails = () => {

    let id = this.props.trip
    console.log(id)
    fetch(`http://localhost:3000/trips/${id}`)
    .then(res => res.json())
    .then(data =>
      this.setState({
      userId: data[0].id,
      tripName: data[0].name,
      tripLocation: data[0].location,
      image: data[0].image,
      tripType: data[0].category,
      tripDate: data[0].date,
      tripNotes: data[0].notes
    }))
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
      let id = this.props.trip.id
    let formData = {name: this.state.tripName, location: this.state.tripLocation, image: this.state.image, category: this.state.tripType, date: this.state.tripDate, notes: this.state.tripNotes, user_id: this.props.trip.user.id}
    fetch(`http://localhost:3000/trips/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: formData.user_id,
            name: formData.name,
            location: formData.location,
            image: formData.image,
            category: formData.category,
            date: formData.date,
            notes: formData.notes
            
        })
    }).then(res => res.json())
    .then(data => this.props.updateDetails(data))
      // this.setState({
      //   userId: data.id,
      //   tripName: data.name,
      //   tripLocation: data.location,
      //   image: data.image,
      //   tripType: data.category,
      //   tripDate: data.date,
      //   tripNotes: data.notes
      // }, () => console.log(this.state)))
  }

  // updateOnEdit = data => {
  //   this.setState({
  //     userId: data.id,
  //     tripName: data.name,
  //     tripLocation: data.location,
  //     image: data.image,
  //     tripType: data.category,
  //     tripDate: data.date,
  //     tripNotes: data.notes
  //   }, () => console.log(this.state))
  // }

render () {
  return (
        <Form onSubmit={(e) =>this.handleSubmit(e)}> 
          <Header textAlign='center'>Create a Trip</Header>

            <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              name="tripName"
              label='Trip Name'
              placeholder='Trip Name'
              value={this.state.tripName}
              onChange={e => this.handleChange(e)}
            />
            <Form.Field
              control={Input}
              name="tripLocation"
              label='Location'
              placeholder='Location'
              value={this.state.tripLocation}
              onChange={e => this.handleChange(e)}
            />

            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              name="image"
              label='Image URL'
              placeholder='Image URL'
              value={this.state.image}
              onChange={e => this.handleChange(e)}
            />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
              control={Input}
              name="tripType"
              label='Trip Type'
              placeholder='Vacation/Work/Camping etc...'
              value={this.state.tripType}
              onChange={e => this.handleChange(e)}
            />  
              <Form.Field
              control={Input}
              name="tripDate"
              label='Date of Trip'
              placeholder='MM/DD/YYYY'
              value={this.state.tripDate}
              onChange={e => this.handleChange(e)}
            />  
            </Form.Group>

            <Form.Field
            control={TextArea}
            name="tripNotes"
            label='Notes'
            placeholder='Any notes or additional info about the trip...'
            value={this.state.tripNotes}
            onChange={e => this.handleChange(e)}
            />

            <Form.Field control={Button}>Submit</Form.Field>
        </Form>
    )
  }
}

export default EditTripContainer