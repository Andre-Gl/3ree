import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='Pulse-header'>
          <h1>Edmunds</h1>
          <div className='Pulse-links'>
            <IndexLink to='/' activeClassName='active'>Home</IndexLink>
            <Link to='/search/Honda/Accord' activeClassName='active'>Search</Link>
            <a href="#">Add new Car</a>
          </div>
        </header>
      </div>
    );
  }
}