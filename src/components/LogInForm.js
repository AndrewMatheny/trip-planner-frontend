import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
          <Header as='h2' color='red' textAlign='center'>
            {/* <Image src='/logo.png' />  */}
            <Segment>
              <h3>Log-in to your account</h3>
            </Segment>
            
          </Header>
          <Form size='large' onSubmit={(e) => this.props.handleSubmit(e)}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' name="username" onChange={(e) => this.handleChange(e)} />

              <Button color='red' fluid size='large' type="submit">
                Login
              </Button>
            </Segment>
          </Form>
          {/* <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message> */}
        </Grid.Column>
      </Grid>
    )
  }
}
export default LoginForm