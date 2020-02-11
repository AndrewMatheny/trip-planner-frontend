import React from 'react'
import { Button, Form, Checkbox, Input, Radio, Select, TextArea, Segment, Container, Header } from 'semantic-ui-react'

class CreateStop extends React.Component {

   
    state = {}
    
      handleChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      handleSubmit = (e) => {
        let formData = {trip_id: this.props.trip.id, name: this.state.stopname, location: this.state.location, date: this.state.date, notes: this.state.notes}
        fetch(`http://localhost:3000/stops`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                trip_id: formData.trip_id,
                name: formData.name,
                location: formData.location,
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
              <Header textAlign='center'>Create a Stop</Header>
              
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                name="stopname"
                label='Stop Name'
                placeholder='Stop Name'
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
                name="date"
                label='Date of Stop'
                placeholder='MM/DD/YYYY'
                onChange={this.handleChange}
              />  
            </Form.Group>
        
            <Form.Field
              control={TextArea}
              name="notes"
              label='Notes'
              placeholder='Any notes or additional info about the stop...'
              onChange={this.handleChange}
            />
           
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </div>
        </Container>
        )
      }
    }

export default CreateStop