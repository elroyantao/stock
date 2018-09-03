import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddTrade from '../../containers/AddTrade/AddTrade'

import { openModal, closeModal } from '../../actions/modalActions'
import { createTrade } from '../../actions/tradeActions'
import { geometricMeanSelector, latestPriceSelector, weightedPriceSelector } from '../../selectors/stockSelector'

class StockRow extends Component {

  openTrade = () => {
    const { openModal, name, symbol, price, closeModal } = this.props
    openModal(<AddTrade { ...{ name, symbol, price } } onCreateTrade={this.createTrade} onClose={closeModal} />)
  }
  createTrade = (trade) => {
    const { createTrade } = this.props
    createTrade(trade)
  }
  calculateDividendYeild() {
    const { latestPrice, dividend, type, fixedDividend, par } = this.props
    const dividendYeild =  type === 'COMMON' ? dividend / latestPrice : (fixedDividend * par) / latestPrice 
    return dividendYeild.toFixed(3)
  }
  calculatePbyE() {
    const { dividend, latestPrice } = this.props
    const PbyE = latestPrice / dividend
    return PbyE.toFixed(2)
  }
  render() {
    const { name, symbol, price, dividend, fixedDividend, par, type, geometricMean, weightedPrice } = this.props
    return (
      <tr>
        <td className="heighlight">{symbol}</td>
        <td className="heighlight">{name}</td>
        <td>{type}</td>
        <td className="align-right">{par}</td>
        <td className="align-right">{dividend}</td>
        <td className="align-right">{fixedDividend}</td>
        <td className="align-right">{this.calculateDividendYeild()}</td>
        <td className="align-right">{this.calculatePbyE()}</td>
        <td className="align-right">{geometricMean || price}</td>
        <td className="align-right">{weightedPrice || price}</td>
        <td className="align-right heighlight">{price}</td>
        <td className="align-center">
          <button onClick={this.openTrade} className="StockList-buy">Buy Stock</button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state, props) => ({
  geometricMean: geometricMeanSelector(state, props),
  latestPrice: latestPriceSelector(state, props) || props.price,
  weightedPrice: weightedPriceSelector(state, props)
})

const mapDispatchToProps = {
  openModal,
  closeModal,
  createTrade
}

export default connect(mapStateToProps, mapDispatchToProps)(StockRow)