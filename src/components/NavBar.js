import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

// let background = 'https://www.smartertravel.com/uploads/2017/06/road_trip_tips_hero-1400x500.jpg'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  style = {
	//   backgroundColor: '#E2A45E'
	color: "white"
  }

  render() {
	const { activeItem } = this.state
	
    return (
      <div style={this.style}>
        <Menu pointing secondary>
          <Menu.Item
		  	style={this.style}
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
		  	style={this.style}
            name='trips'
            active={activeItem === 'trips'}
            onClick={this.handleItemClick}
          />
          
          <Menu.Menu position='right'>
			  
			  <Menu.Item
			  style={this.style}
            name='create a trip'
            active={activeItem === 'create a trip'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
			style={this.style}
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        {/* <Segment> */}
          {/* <img src='https://www.smartertravel.com/uploads/2017/06/road_trip_tips_hero-1400x500.jpg' style={this.style} /> */}
        {/* </Segment> */}
      </div>
    )
  }
}