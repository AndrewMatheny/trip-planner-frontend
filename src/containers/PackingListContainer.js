import React, { Component } from "react";
import PackingListDisplay from '../components/PackingListDisplay'
import CreateItemContainer from './CreateItemContainer'

class PackingListContainer extends Component {
  itemCollection = () => {
    if(this.props.items) {
      return this.props.items.map(item => {
        return <PackingListDisplay item={item} />
      })
    }
  }

  render() {
    return(
      <div>
        <h2>Packing List</h2>
        {this.itemCollection()}
        <CreateItemContainer trip={this.props.trip} updateDetails={this.props.updateDetails} updateItems={this.props.updateItems}/>
      </div>
    )
  }
}

export default PackingListContainer