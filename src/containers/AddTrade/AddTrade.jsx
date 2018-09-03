import React, { Component } from 'react'
import { connect } from 'react-redux'

import './AddTrade.css'

class AddTrade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: props.price,
      quantity: 1
    }
  }
  onChangePrice = (event) => {
    const price = parseInt(event.target.value)
    this.setState({
      price
    })
  }
  onChangeQuantity = (event) => {
    const quantity = parseInt(event.target.value)
    this.setState({
      quantity
    })
  
  }
  onSubmitForm = (event) => {
    event.preventDefault()
    const { price: basePrice, onCreateTrade, onClose, symbol, name } = this.props
    const { price, quantity } = this.state
    if (price < basePrice || quantity < 1) return
    onCreateTrade({
      price,
      quantity,
      symbol,
      name,
      total: price * quantity,
      timestamp: Date.now()
    })
    onClose()
  }
  render() {
    const { name, symbol, onClose } = this.props
    const { price, quantity } = this.state
    return (
      <form className="AddTrade">
        <div className="AddTrade-title">{ name } - { symbol }</div>
        <div className="AddTrade-container">
          <div className="AddTrade-feild">
            <label>Price</label>
            <input type="number" value={price} onChange={this.onChangePrice}/>
          </div>
          <div className="AddTrade-feild">
            <label>Quantity</label>
            <input type="number" value={quantity} onChange={this.onChangeQuantity}/>
          </div>
          <div className="AddTrade-buttons">
            <input className="AddTrade-button AddTrade-button--cancel" type="button" onClick={onClose} value="cancel"/>
            <input className="AddTrade-button AddTrade-button--success" type="submit" onClick={this.onSubmitForm} value="submit"/>

          </div>
        </div>
      </form>
    )
  }
}

export default AddTrade