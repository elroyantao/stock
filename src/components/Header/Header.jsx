import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <section>
        <div>GBC Exchange</div>
        <ul>
          <li><Link to="/">Stocks</Link></li>
          <li><Link to="/trades">My Trades</Link></li>
        </ul>
      </section>
    )
  }
}