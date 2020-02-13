import React, { Component } from "react";
import { Button } from 'semantic-ui-react'
import StopDisplay from '../components/StopDisplay'
import CreateStop from './CreateStop'
import { Container } from 'semantic-ui-react'


class StopsContainer extends Component {

  state = {
    show: false
  }

  handleEditShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

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
        <Button basic color='orange' style={{margin: '10px 0px 0px 5px'}} onClick={() => this.handleEditShow()}>Add Stop</Button>
        {this.state.show ? 
        <CreateStop user={this.props.user} trip={this.props.trip} updateStops={this.props.updateStops}/> : null
        }
        </div>
      </Container>
    )
  }
}

export default StopsContainer;