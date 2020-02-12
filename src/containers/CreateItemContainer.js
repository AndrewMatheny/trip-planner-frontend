import React, { Component } from 'react';
import { Button, Form, Input, Container, Header } from 'semantic-ui-react'

class CreateItemContainer extends Component {

    state = {}
    
      handleChange = (e) => {
        // console.log(e.target)
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      handleSubmit = (e) => {
          // console.log(e.target.itemname.value)
        let formData = {name: this.state.itemname, quantity: this.state.quantity, is_packed: false, trip_id: this.props.trip.id}
        fetch(`http://localhost:3000/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                quantity: formData.quantity,
                is_packed: false,
                trip_id: formData.trip_id
            })
        }).then(res => res.json())
        .then(item => this.props.updateItems(item))
      }

      render() {
        return (  
        <Container >
        
        <div className="ui raised segment" style={{margin: '40px'}} >
          <Form onSubmit={(e) => this.handleSubmit(e)}> 
              <Header textAlign='center'>Create an Item</Header>
              
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                name="itemname"
                label='Item Name'
                placeholder='Item Name'
                onChange={this.handleChange}
              />
              
              <Form.Field
                control={Input}
                name="quantity"
                label='Quantity'
                placeholder='Quantity'
                onChange={this.handleChange}
              />
              
              {/* <Form.Field>
                <Checkbox
                style={{}}
                control={Input}
                label='Packed'
                onChange={this.handleChange}
                checked={this.state.checked}
                />
              
              </Form.Field> */}
    
            </Form.Group>

            {/* <Form.Group>
            <Checkbox
                style={{padding: '0.5rem'}}
                control={Input}
                label='Packed'
                onChange={this.handleChange}
                checked={this.state.checked}
                />
            </Form.Group> */}

            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </div>

        </Container>
        )
      }
    }

export default CreateItemContainer