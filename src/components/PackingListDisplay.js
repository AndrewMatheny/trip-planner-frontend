import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";

class PackingListDisplay extends Component {

  render() {
    return(
      <div>
        <Checkbox 
        label={this.props.item.name}/>
        <p>Quantity: {this.props.item.quantity}</p>
      </div>
    )
  }
}

export default PackingListDisplay