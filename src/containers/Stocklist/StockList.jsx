import React, { Component } from 'react'
import { connect } from 'react-redux'

class StockList extends Component {
  render() {
    const { stocks } = this.props
    return (
      <div>
        {/* todo: add stocklist here */}
        {stocks.map((stock) => (
          <div>
            <span>{stock.name}</span>
            <span>{stock.symbol}</span>
            <span>{stock.price}</span>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stocks: Object.values(state.stock)
})

export default connect(mapStateToProps)(StockList)