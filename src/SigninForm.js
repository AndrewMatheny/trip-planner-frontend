import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react'

class SigninForm extends Component {
  render() {
    return(
      <div>
        <Form>
          <Form.Field>
            <h2>Sign In!</h2>
            <label>Username</label>
            <Form.Input
              type="text"
              name="username"
              width={6}
              onChange={e => this.props.handleChange(e)}
              onSubmit={() => this.props.onSubmit(this.props.formInfo.submittedData)}
              value={this.props.formInfo.username}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SigninForm