import React, { Component } from "react";

class StopDisplay extends Component {
  render() {
    return(
      <div>
        <p>{this.props.stop.name}<br></br>
        Location: {this.props.stop.location}<br></br>
        Date: {this.props.stop.location}<br></br>
        Notes: {this.props.stop.notes}
        </p>
      </div>
    )
  }
}

export default StopDisplay