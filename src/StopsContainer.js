import React, { Component } from "react";
import StopDisplay from './StopDisplay'
import CreateStop from './containers/CreateStop'

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
        <div>
          <h2>Itinerary</h2>
          {this.stopsCollection()}
        </div>
        <div>
          <CreateStop user={this.props.user} trip={this.props.trip}/>
        </div>
      </div>
    )
  }
}

export default StopsContainer;