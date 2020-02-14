import React, { Component } from "react";
import { Checkbox, Icon, Card } from "semantic-ui-react";
import '../PackingListDisplay.css'

class PackingListDisplay extends Component {

  
  // packed = this.props.item.is_packed

  state = {
    check: this.props.item.is_packed
  }


  handleCheckPatch = () => {
    let id = this.props.item.id
    console.log(this.props)
    let itemPatch = {name: this.props.item.name, quantity: this.props.item.quantity, is_packed: this.props.item.is_packed}
    console.log(itemPatch)
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          is_packed: !itemPatch.is_packed       
      })
    }).then(res => res.json())
    .then(item => this.handleCheck())
  }
 
  handleCheck = () => {
    this.setState(prevState => ({
      check: !prevState.check
    }))
  }

  itemCheck = () => {
    let isPacked = this.props.item.is_packed
    let status = this.state.check
    status = isPacked
    // return status
    this.setState({
      check: status
    })
  }

  render() {
    return(
        // <Grid>
        //   <Grid.Row>
        //   <Grid.Column width={8}>
        <div className="ui column" style={{padding: '1.5rem'}}>
        <Card raised style={{height: '85px'}} >
          <Card.Content>
        <Card.Header>
        <Checkbox 
        label={this.props.item.name}
        checked={this.state.check}
        onClick={() => this.handleCheckPatch()}/>
        </Card.Header>
        <Card.Description className='quantity'>Quantity: {this.props.item.quantity}</Card.Description>
        <div style={{textAlign: 'right'}}>
              <Icon link name='x' 
              size='large'
              onClick={() => this.props.deleteItem(this.props.item)}/>
        </div>
        </Card.Content>
          </Card>
        </div>
    )
  }
}

export default PackingListDisplay