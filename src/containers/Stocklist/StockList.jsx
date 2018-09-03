import React, { Component } from 'react'
import { connect } from 'react-redux'

import StockRow from './StockRow'

import './StockList.css'

class StockList extends Component {
  render() {
    const { stocks } = this.props
    return (
      <div className="StockList">
        <table>
          <thead>
            <th className="align-left">SYM</th>
            <th className="align-left">Name</th>
            <th className="align-left">Type</th>
            <th className="align-right">Par value</th>
            <th className="align-right">Last divedend</th>
            <th className="align-right">Fixed dividend</th>
            <th className="align-right">Divident yeild</th>
            <th className="align-right">P/E ratio</th>
            <th className="align-right">Geometric mean</th>
            <th className="align-right">Weighted Price</th>
            <th className="align-right">Price</th>
            <th className="align-center">Action</th>
          </thead>
          {/* todo: add stocklist here */}
          {stocks.map((stock) => (
            <StockRow {...stock} />
          ))}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stocks: Object.values(state.stock)
})

export default connect(mapStateToProps)(StockList)