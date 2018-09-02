import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import StockList from '../Stocklist/StockList'
import TradeList from '../TradeList/TradeList'
import Header from '../../components/Header/Header'

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={StockList}/>
          <Route path="/trades" component={TradeList}/>
        </div>
      </Router>
    )
  }
}