import React, { Component } from 'react'
import { Button, Form, Input, Container, Header } from 'semantic-ui-react'

class CreateUserForm extends Component {
   
    state = {}
    
      handleChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      handleSubmit = () => {
        let formData = {username: this.state.username}
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: formData.username
            })
        }).then(res => res.json())
        .then(user => window.location.reload())
      }

      render() {
        return (
        <Container style={{opacity: 0.9}}>
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Form onSubmit={() => this.handleSubmit()}> 
              <Header textAlign='center'>Create an Account</Header>
              
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                fluid icon='user'
                iconPosition='left' 
                name="username"
                label='Username'
                placeholder='Username'
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
           
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </div>
        </Container>
        )
      }
    }

export default CreateUserForm