import React, { Component } from 'react';
import TripCard from './TripCard';
// import { Card } from 'semantic-ui-react'

class TripContainer extends Component{
  // console.log(this.props)

  displayTrips = () => {
    return this.props.trips.map((trip, id) => {
        return <TripCard key={id} trip={trip} />
    })
}

  render() {
    return(
      <div className="ui five column grid">
        <div className="row">

        {/* Trip Container */}
        {this.displayTrips()}

        </div>
      </div>
    )
  }
}

export default TripContainer;