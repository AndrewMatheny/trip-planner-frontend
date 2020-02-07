import React, { Component } from "react";
import SigninForm from './SigninForm';
import SigninDisplay from './SigninDisplay'

class SigninContainer extends Component{
  state = {
    username: ""
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        <SigninForm 
        formInfo={this.state} 
        handleChange={this.handleChange}/>
        <SigninDisplay formInfo={this.state}/>
      </div>
    )
  }
}

export default SigninContainer