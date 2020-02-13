import React from 'react'
import { Button, Form, Input, Container, Header } from 'semantic-ui-react'

class CreateUserForm extends React.Component {
   
    state = {}
    
      handleChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      handleSubmit = (e) => {
        let formData = {name: this.state.username}
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.username
            })
        }).then(res => res.json())
        .then(user => this.props.addUser(user))
      }

      render() {
        return (
        <Container >
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Form onSubmit={(e) =>this.handleSubmit(e)}> 
              <Header textAlign='center'>Create an Account</Header>
              
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                name="username"
                label='User Name'
                placeholder='User Name'
                onChange={this.handleChange}
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