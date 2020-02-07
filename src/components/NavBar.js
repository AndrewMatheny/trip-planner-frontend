import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='trips'
            active={activeItem === 'trips'}
            onClick={this.handleItemClick}
          />
          
          <Menu.Menu position='right'>
			  
			  <Menu.Item
            name='create a trip'
            active={activeItem === 'create a trip'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='https://www.smartertravel.com/uploads/2017/06/road_trip_tips_hero-1400x500.jpg' />
        </Segment>
      </div>
    )
  }
}