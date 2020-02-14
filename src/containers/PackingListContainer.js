import React, { Component } from "react";
import { Button, Container } from 'semantic-ui-react'
import PackingListDisplay from '../components/PackingListDisplay'
import CreateItemContainer from './CreateItemContainer'

class PackingListContainer extends Component {

  state = {
    show: false
  }

  handleEditShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }


  itemCollection = () => {
    if(this.props.items) {
      return this.props.items.map(item => {
        return <PackingListDisplay item={item} key={item.id}/>
      })
    }
  }

  render() {
    return(
      <Container style={{margin: '10px'}} >
        <h2>Packing List</h2>
        {this.itemCollection()}
        <Button basic color='orange' style={{margin: '10px 0px 0px 5px'}} onClick={() => this.handleEditShow()}>Add Item</Button>
      
        {this.state.show ? 
          <CreateItemContainer trip={this.props.trip} updateDetails={this.props.updateDetails} updateItems={this.props.updateItems}/> : null
        }
      </Container>
    )
  }
}

export default PackingListContainer