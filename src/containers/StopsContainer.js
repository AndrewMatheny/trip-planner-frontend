import React, { Component } from "react";
import StopDisplay from '../components/StopDisplay'
import CreateStop from './CreateStop'

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
          <CreateStop user={this.props.user} trip={this.props.trip} updateStops={this.props.updateStops}/>
        </div>
      </div>
    )
  }
}

export default StopsContainer;