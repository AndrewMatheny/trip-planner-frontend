import React, { Component } from "react";

class PackingListDisplay extends Component {

  render() {
    return(
      <div>
        {this.props.item.name}
      </div>
    )
  }
}

export default PackingListDisplay