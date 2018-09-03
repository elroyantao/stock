import React, { Component } from 'react'

export default class TradeRow extends Component {
  render() {
    const { price, quantity, symbol, name, total } = this.props
    return (
      <tr>
        <td>{symbol}</td>
        <td>{name}</td>
        <td className="align-right">{price}</td>
        <td className="align-right">{quantity}</td>
        <td className="align-right">{total}</td>
      </tr>
    )
  }
}