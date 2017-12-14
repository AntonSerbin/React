import React, {Component} from 'react';
import './styles.css';
import Header from 'components/Header';
import Article from 'components/Article';
import Title from 'components/Title';
import PropTypes from "prop-types";

      
export default class App extends Component {
  render() {
      
    return (

      <div className="App">
        <Header />
        <div className="Article__App"><Article  /></div>
        <div className="Title__App"><Title /></div>
      </div>
    );
  }
}
