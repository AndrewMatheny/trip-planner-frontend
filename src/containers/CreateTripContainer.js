import React from 'react'
import { Button, Form, Input, TextArea, Container, Header } from 'semantic-ui-react'

class CreateTripContainer extends React.Component {

   
    state = {}
    
      handleChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      handleSubmit = (e) => {
        //   console.log(e.target.tripname.value)
        let formData = {name: this.state.tripname, location: this.state.location, image: this.state.image, category: this.state.triptype, date: this.state.date, notes: this.state.notes, user_id: this.props.user.id}
        fetch(`http://localhost:3000/trips`, {
            method: "POST",
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
        .then(console.log)
      }


      render() {
        return (
        <Container >
        
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Form onSubmit={(e) =>this.handleSubmit(e)}> 
              <Header textAlign='center'>Create a Trip</Header>
              
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                name="tripname"
                label='Trip Name'
                placeholder='Trip Name'
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                name="location"
                label='Location'
                placeholder='Location'
                onChange={this.handleChange}
              />
    
            </Form.Group>
            <Form.Group widths='equal'>
             <Form.Field
                control={Input}
                name="image"
                label='Image URL'
                placeholder='Image URL'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                control={Input}
                name="triptype"
                label='Trip Type'
                placeholder='Vacation/Work/Camping etc...'
                onChange={this.handleChange}
              />  
                <Form.Field
                control={Input}
                name="date"
                label='Date of Trip'
                placeholder='MM/DD/YYYY'
                onChange={this.handleChange}
              />  
            </Form.Group>
        
            <Form.Field
              control={TextArea}
              name="notes"
              label='Notes'
              placeholder='Any notes or additional info about the trip...'
              onChange={this.handleChange}
            />
           
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </div>
        </Container>
        )
      }
    }

export default CreateTripContainer