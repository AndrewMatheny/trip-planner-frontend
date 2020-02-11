import React, { Component } from "react";
import StopDisplay from './StopDisplay'

class StopsContainer extends Component {
  stopsCollection = () => {
    if(this.props.stops) {
      return this.props.stops.map(stop => {
        return <StopDisplay stop={stop} />
      })
    }
  }

  render() {
    return(
      <div>
        <h2>Itinerary</h2>
        {this.stopsCollection()}
      </div>
    )
  }
}

export default StopsContainer;