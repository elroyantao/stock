import React, { Component } from 'react'
import { connect } from 'react-redux'

import TradeRow from './TradeRow'

import './TradeList.css'

class TradeList extends Component {
  render() {
    const { trades } = this.props
    return (
      <div className="TradeList">
        <table >
          <thead>
            <th className="align-left">SYM</th>
            <th className="align-left">Name</th>
            <th className="align-right">Price</th>
            <th className="align-right">Quantity</th>
            <th className="align-right">Total</th>
          </thead>
          {trades.map((trade) => (
            <TradeRow {...trade} />
          ))}
        </table>
        {!trades.length && 
            <div className="TradeList-noTrades">You do not have any trades now</div>  
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trades: state.trade.trades.reverse()
})

export default connect(mapStateToProps)(TradeList)