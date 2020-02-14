import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import StopDisplay from '../components/StopDisplay'
import CreateStop from './CreateStop'
import { Container } from 'semantic-ui-react'


class StopsContainer extends Component {

  // state = {
  //   show: false
  // }

  // handleEditShow = () => {
  //   this.setState(prevState => ({
  //     show: !prevState.show
  //   }))
  // }

  // deleteStop = (stop) => {
  //   fetch(`http://localhost:3000/stops/${stop.id}`,{
  //     method: 'DELETE',
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(console.log)
  //   .then(stop => this.props.removeStopState(stop))
  //   }
  

  stopsCollection = () => {
    if(this.props.stops) {
      return this.props.stops.map(stop => {
        return <StopDisplay key={stop.id} stop={stop} deleteStop={this.props.deleteStop} />
      })
    }
  }

  render() {
    return(
      <Container style={{margin: '10px'}} >
            <h2>Itinerary</h2>
        <div className="ui three column grid">
          <div className="row"> 
              {this.stopsCollection()}
          </div>
        </div>
        <div>
        <Button basic color='orange' style={{margin: '10px 0px 0px 5px'}} onClick={() => this.props.handleAddStopShow()}>Add Stop</Button>
        {this.props.showStop ? 
        <CreateStop user={this.props.user} trip={this.props.trip} updateStops={this.props.updateStops}/> : null
        }
        </div>
      </Container>
    )
  }
}

export default StopsContainer;