import React, { Component } from "react";
import { Button, Container } from 'semantic-ui-react'
import PackingListDisplay from '../components/PackingListDisplay'
import CreateItemContainer from './CreateItemContainer'

class PackingListContainer extends Component {

  itemCollection = () => {
    if(this.props.items) {
      return this.props.items.map(item => {
        return <PackingListDisplay item={item} key={item.id} deleteItem={this.props.deleteItem}/>
      })
    }
  }

  render() {
    return(
      <Container style={{margin: '10px'}} >
        <h2>Packing List</h2>
        <div className="ui three column grid">
          <div className="row"> 
        {this.itemCollection()}
          </div>
        </div>
        <Button basic color='orange' style={{margin: '10px 0px 0px 5px'}} onClick={() => this.props.handleAddItemShow()}>Add Item</Button>
      
        {this.props.itemShow ? 
          <CreateItemContainer trip={this.props.trip} updateDetails={this.props.updateDetails} updateItems={this.props.updateItems}/> : null
        }
      </Container>
    )
  }
}

export default PackingListContainer