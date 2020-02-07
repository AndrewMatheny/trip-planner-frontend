import React, { Component } from "react";

class SigninForm extends Component {
  render() {
    return(
      <div>
        <form>
        <input
            type="text"
            name="username"
            onChange={e => this.props.handleChange(e)}
            value={this.props.formData.username}
          />
        </form>
      </div>
    )
  }
}

export default SigninForm