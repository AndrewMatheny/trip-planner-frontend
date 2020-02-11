import React, { Component } from "react";
import PackingListDisplay from './PackingListDisplay'
import CreateItemContainer from './containers/CreateItemContainer'

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
        <CreateItemContainer trip={this.props.trip}/>
      </div>
    )
  }
}

export default PackingListContainer