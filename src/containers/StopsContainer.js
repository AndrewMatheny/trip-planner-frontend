import React, { Component } from "react";
import StopDisplay from '../components/StopDisplay'
import CreateStop from './CreateStop'
import { Container } from 'semantic-ui-react'

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
      <Container style={{margin: '40px'}} >
            <h2>Itinerary</h2>
        <div className="ui three column grid">
          <div className="row"> 
              {this.stopsCollection()}
          </div>
        </div>
        <div>
          <CreateStop user={this.props.user} trip={this.props.trip} updateStops={this.props.updateStops}/>
        </div>
      </Container>
    )
  }
}

export default StopsContainer;