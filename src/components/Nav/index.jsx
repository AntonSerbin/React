import React, {Component} from 'react';
import './styles.css';

      
export default class Nav extends Component {
  render() {

    return (
      <nav className="Nav">
      <ul className="Navigation">
        <li className="Navigation__item"><a className="Navigation__link" href="">Login</a></li>
        <li className="Navigation__item"><a className="Navigation__link" href="">Browse</a></li>
        <li className="Navigation__item"><a className="Navigation__link" href="">About</a></li>
      </ul>
        </nav>
    );


}

}
