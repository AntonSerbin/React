import React, {Component} from 'react';
import './styles.css';
import Nav from 'components/Nav'
      
export default class Header extends Component {
  render() {

    return (
      <header className = "Header">
          <h1 className = "Header__logo">Movie Mate</h1>
          <Nav />
        </header>
    );
}

}
