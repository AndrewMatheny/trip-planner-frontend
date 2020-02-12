import React, { Component } from "react";
import {Container, Grid, Header, Image, Segment, Icon, Button} from 'semantic-ui-react'
import PackingListContainer from "../containers/PackingListContainer";
import StopsContainer from "../containers/StopsContainer";
import EditTripContainer from '../containers/EditTripContainer'
import '../HideForm.css';

class TripPageDetails extends Component {

  state = {
    show: false
  }

  handleEditShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  render() {
    return(
      <div>
        <Container>
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Grid>
            <Grid.Column width={4}>
              <Image style={{height: '250px'}} src={this.props.trip.image} />
              <Button basic color='orange' style={{margin: '10px'}} onClick={() => this.handleEditShow()}>Edit Trip</Button>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h2'>
                <Icon name='sun' />
                <Header.Content>{this.props.trip.name}</Header.Content>
              </Header>
              <p>Trip Type: {this.props.trip.category}</p>
              <p>Location: {this.props.trip.location}</p>
              <p>Date: {this.props.trip.date}</p>
              <p>Notes: {this.props.trip.notes}</p>
            </Grid.Column>
          </Grid>
        {this.state.show ? <Segment raised style={{margin: '40px'}}>
          <EditTripContainer trip={this.props.trip} updateDetails={this.props.updateDetails} handleEditInput={this.props.handleEditInput} formData={this.props.formData}/>
            </Segment> : null
          }
        </div>

        <div>
        <Segment raised style={{margin: '40px'}}>
              <PackingListContainer trip={this.props.trip} items={this.props.trip.items} updateItems={this.props.updateItems}/>
        </Segment>
        </div>

        <Segment raised style={{margin: '40px'}}>
              <StopsContainer user={this.props.user} stops={this.props.trip.stops} trip={this.props.trip} updateStops={this.props.updateStops}/>
        </Segment>
        </Container>
    </div>
    )
  }
}

TripPageDetails.defaultProps = {
	image: 'https://react.semantic-ui.com/images/wireframe/image.png'
};

export default TripPageDetails
