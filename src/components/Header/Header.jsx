import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <section className="Header">
        <div className="Header-title">GBC Exchange</div>
        <ul className="Header-menu">
          <li className="Header-menuItem"><NavLink activeClassName="selected" exact to="/">Stocks</NavLink></li>
          <li className="Header-menuItem"><NavLink activeClassName="selected" to="/trades">My Trades</NavLink></li>
        </ul>
      </section>
    )
  }
}