import React, { Component } from "react";
import PackingListDisplay from './PackingListDisplay'

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
      </div>
    )
  }
}

export default PackingListContainer