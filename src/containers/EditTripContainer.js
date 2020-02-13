import React, { Component } from "react"
import { Form, Header, Input, TextArea, Button } from "semantic-ui-react";

class EditTripContainer extends Component{

  handleSubmit = (e) => {
      let id = this.props.trip.id
      let formPatch = {name: this.props.formData.name, location: this.props.formData.location, image: this.props.formData.image, category: this.props.formData.cateogry, date:this.props.formData.date, notes: this.props.formData.notes, user_id: this.props.trip.user.id}

    fetch(`http://localhost:3000/trips/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: formPatch.user_id,
            name: formPatch.name,
            location: formPatch.location,
            image: formPatch.image,
            category: formPatch.category,
            date: formPatch.date,
            notes: formPatch.notes
            
        })
    }).then(res => res.json())
    .then(data => this.props.updateDetails(data))
  }

render () {
  return (
        <Form onSubmit={(e) =>this.handleSubmit(e)}> 
          <Header textAlign='center'>Edit Trip</Header>

            <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              name="name"
              label='Trip Name'
              placeholder='Trip Name'
              onChange={e => this.props.handleEditInput(e)}
              value={this.props.formData.name}
            />
            <Form.Field
              control={Input}
              name="location"
              label='Location'
              placeholder='Location'
              onChange={e => this.props.handleEditInput(e)}
              value={this.props.formData.location}
            />

            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field
              control={Input}
              name="image"
              label='Image URL'
              placeholder='Image URL'
              value={this.props.formData.image}
              onChange={e => this.props.handleEditInput(e)}
            />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field
              control={Input}
              name="category"
              label='Trip Type'
              placeholder='Vacation/Work/Camping etc...'
              value={this.props.formData.category}
              onChange={e => this.props.handleEditInput(e)}
            />  
              <Form.Field
              control={Input}
              name="date"
              label='Date of Trip'
              placeholder='MM/DD/YYYY'
              value={this.props.formData.date}
              onChange={e => this.props.handleEditInput(e)}
            />  
            </Form.Group>

            <Form.Field
            control={TextArea}
            name="notes"
            label='Notes'
            placeholder='Any notes or additional info about the trip...'
            value={this.props.formData.notes}
            onChange={e => this.props.handleEditInput(e)}
            />

            <Form.Field control={Button}>Submit</Form.Field>
        </Form>
    )
  }
}

export default EditTripContainer