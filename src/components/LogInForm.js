import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import logo from '../images/FinalLogo.png'

class LoginForm extends React.Component {

  state = {}

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        
        <Grid.Column style={{ maxWidth: 450 }}>
          <img alt="logo" src={logo} style={{ maxWidth: 400, opacity: 1}}/>

          <Form style={{opacity: 0.9, padding: '2rem 0 0.5rem 0'}} size='large' onSubmit={(e) => this.props.handleSubmit(e)}>
            <Segment stacked style={{padding: '2rem 3rem 0.5rem 3rem'}}>
            <h3 style={{color: 'red', padding: '2rem 0 2rem 0'}}>Login to your account</h3>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' name="username" onChange={(e) => this.handleChange(e)} />
              <Button color='red' fluid size='large' type="submit">
                Login
              </Button>

              <div style={{padding: '2rem 0 1.5rem 0'}}>
              New to us? 
              <Button basic size='tiny' style={{margin: '1rem 0 0 1rem'}} onClick={() => this.props.handleCreateUser()}>Sign up!</Button>
              </div>
            </Segment>
          </Form>
          
        </Grid.Column>
      </Grid>
    )
  }
}
export default LoginForm