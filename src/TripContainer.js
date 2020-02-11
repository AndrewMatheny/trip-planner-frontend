import React, { Component } from 'react';
import TripCard from './TripCard';
import { Container } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react'

class TripContainer extends Component{

  displayTrips = () => {
    return this.props.trips.map((trip, id) => {
        return <TripCard key={id} trip={trip} />
    })
}

  render() {
    return(
      <Container style={{margin: '40px'}} >
      <div className="ui four column grid">
        <div className="row">
        {this.displayTrips()}
        </div>
      </div>
      </Container>
    )
  }
}

export default TripContainer;