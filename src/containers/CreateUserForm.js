import React from 'react'
import { Button, Form, Input, TextArea, Container, Header } from 'semantic-ui-react'

class CreateUserForm extends React.Component {

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
              <Form.Field
                control={Input}
                name="password"
                label='Password'
                placeholder='Password'
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