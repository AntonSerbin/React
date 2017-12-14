import React, {Component} from 'react';
import header from './styles.css';
import PropTypes from "prop-types";

      
export default class Header extends Component {
  render() {

    return (
        <header className = "Header">
      <h1 className ="Header__logo">Movie Mate</h1>
      <ul className="Navigation">
        <li className="Navigation__item"><a className="Navigation__link" href="">Login</a></li>
        <li className="Navigation__item"><a className="Navigation__link" href="">Browse</a></li>
        <li className="Navigation__item"><a className="Navigation__link" href="">About</a></li>
      </ul>
        </header>
    );


}

}
