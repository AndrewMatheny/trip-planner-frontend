import React, { Component } from "react";
import {Container, Grid, Header, Image, Segment, Icon, Button} from 'semantic-ui-react'
import PackingListContainer from "../containers/PackingListContainer";
import StopsContainer from "../containers/StopsContainer";
import EditTripContainer from '../containers/EditTripContainer'

class TripPageDetails extends Component {

  render() {
    return(
        <Container style={{margin: '10px', opacity: 0.95}}>
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Grid>
            <Grid.Column width={4}>
              <Image style={{height: '200px'}} src={this.props.trip.image} />
              <Button basic color='orange' style={{margin: '10px 0px 0px 5px'}} onClick={() => this.props.handleEditShow()}>Edit Trip</Button>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h2'>
                <Icon name='sun' />
                <Header.Content>{this.props.trip.name}</Header.Content>
              </Header>
              <Header as='h4'>Trip Type: {this.props.trip.category}</Header>
              <p>Location: {this.props.trip.location}</p>
              <p>Date: {this.props.trip.date}</p>
              <p>Notes: {this.props.trip.notes}</p>
            </Grid.Column>
          </Grid>
        {this.props.show ? 
        <Segment raised style={{margin: '40px'}}>
          <EditTripContainer trip={this.props.trip} updateDetails={this.props.updateDetails} handleEditInput={this.props.handleEditInput} formData={this.props.formData}/>
        </Segment> : null
        }
        </div>

        <Segment raised style={{margin: '40px'}}>
          <PackingListContainer trip={this.props.trip} items={this.props.trip.items} updateItems={this.props.updateItems} itemShow={this.props.itemShow} handleAddItemShow={this.props.handleAddItemShow} deleteItem={this.props.deleteItem}/>
        </Segment> 

        <Segment raised style={{margin: '40px'}}>
          <StopsContainer user={this.props.user} stops={this.props.trip.stops} trip={this.props.trip} updateStops={this.props.updateStops} deleteStop={this.props.deleteStop} showStop={this.props.showStop} handleAddStopShow={this.props.handleAddStopShow}/>
        </Segment>
        </Container>
    )
  }
}

TripPageDetails.defaultProps = {
	image: 'https://react.semantic-ui.com/images/wireframe/image.png'
};

export default TripPageDetails
