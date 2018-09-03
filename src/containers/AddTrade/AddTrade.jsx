import React, { Component } from 'react'

import './AddTrade.css'

export default class AddTrade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: props.price,
      quantity: 1,
      error: ''
    }
  }
  onChangePrice = (event) => {
    const price = parseInt(event.target.value, 10)
    this.setState({
      error: '',
      price
    })
  }
  onChangeQuantity = (event) => {
    const quantity = parseInt(event.target.value, 10)
    this.setState({
      error: '',
      quantity
    })
  
  }
  onSubmitForm = (event) => {
    event.preventDefault()
    const { onCreateTrade, onClose, symbol, name } = this.props
    const { price, quantity } = this.state
    if (price < 0 || quantity < 1) {
      this.setState({
        error: 'check that price and quantity are valid'
      })
      return
    }
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
    const { price, quantity, error } = this.state
    return (
      <form className="AddTrade">
        <div className="AddTrade-title">{ name } - { symbol } <span className="AddTrade-titlePrice">({price})</span></div>
        <div className="AddTrade-container">
          {error && 
            <div className="AddTrade-error">
              {error}
            </div>
          }
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

