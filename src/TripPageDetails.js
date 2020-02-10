import React, { Component } from "react";
import {
  Container, Divider, Grid, Header, Image, List, Segment, Icon} from 'semantic-ui-react'
import PackingListContainer from "./PackingListContainer";

class TripPageDetails extends Component {

  render() {
    return(
      <div>
        <Container>
        <div className="ui raised segment" style={{margin: '40px'}}>
          <Grid>
            <Grid.Column width={4}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
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
        </div>
        <Segment raised style={{margin: '40px'}}>
          <PackingListContainer items={this.props.trip.items} />
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
