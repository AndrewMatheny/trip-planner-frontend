import React, { Component } from "react";
// import SigninForm from './SigninForm';
import SigninDisplay from './SigninDisplay'
import { Button, Form } from 'semantic-ui-react'

class SigninContainer extends Component{
  state = {
    username: "",
    submittedData: ""
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let hello = console.log("Welcome User")
    this.setState({
      submittedData: hello
    })
  }

  render() {
    return(
      <div>
        {/* <SigninForm 
        formInfo={this.state} 
        handleChange={this.handleChange}
        onSubmit={this.handleSubmit}/> */}
        <Form>
          <Form.Field>
            <h2>Sign In!</h2>
            <label>Username</label>
            <Form.Input
              type="text"
              name="username"
              width={6}
              onChange={e => this.handleChange(e)}
              onSubmit={() => this.onSubmit(this.state.submittedData)}
              value={this.state.username}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <SigninDisplay formInfo={this.state}/>
      </div>
    )
  }
}

export default SigninContainer