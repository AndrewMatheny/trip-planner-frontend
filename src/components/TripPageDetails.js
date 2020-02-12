import React, { Component } from "react";
import {Container, Grid, Header, Image, Segment, Icon, Button} from 'semantic-ui-react'
import PackingListContainer from "../containers/PackingListContainer";
import StopsContainer from "../containers/StopsContainer";
import EditTripContainer from '../containers/EditTripContainer'

class TripPageDetails extends Component {

  render() {
    return(
      <div>
        <Container>
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Grid>
            <Grid.Column width={4}>
              <Image src={this.props.trip.image} />
              <Button basic color='orange'>Edit Trip</Button>
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
        <Segment raised style={{margin: '40px'}}>
          {console.log(this.props.trip)}
          <EditTripContainer trip={this.props.trip} updateDetails={this.props.updateDetails} handleEditInput={this.props.handleEditInput} formData={this.props.formData}/>
        </Segment>
        </div>
        <Segment raised style={{margin: '40px'}}>
              <PackingListContainer trip={this.props.trip} items={this.props.trip.items} />
        </Segment>
        <Segment raised style={{margin: '40px'}}>
              <StopsContainer user={this.props.user} stops={this.props.trip.stops} trip={this.props.trip}/>
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
