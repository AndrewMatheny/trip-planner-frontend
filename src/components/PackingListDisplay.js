import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

class PackingListDisplay extends Component {

  
  // packed = this.props.item.is_packed

  state = {
    check: this.props.item.is_packed
  }


  handleCheckPatch = () => {
    let id = this.props.item.id
    console.log(this.props)
    let itemPatch = {name: this.props.item.name, quantity: this.props.item.quantity, is_packed: this.props.item.is_packed}
    console.log(itemPatch)
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          is_packed: !itemPatch.is_packed       
      })
    }).then(res => res.json())
    .then(item => this.handleCheck())
  }
 
  handleCheck = () => {
    this.setState(prevState => ({
      check: !prevState.check
    }))
  }

  itemCheck = () => {
    let isPacked = this.props.item.is_packed
    let status = this.state.check
    status = isPacked
    // return status
    this.setState({
      check: status
    })
  }

  render() {
    return(
      <div>
        <Checkbox 
        label={this.props.item.name}
        checked={this.state.check}
        onClick={() => this.handleCheckPatch()}/>
        <p>Quantity: {this.props.item.quantity}</p>
      </div>
    )
  }
}

export default PackingListDisplay