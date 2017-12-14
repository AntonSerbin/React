import React, {Component} from 'react';
import article from './styles.css';
import PropTypes from "prop-types";

      
export default class Article extends Component {
  render() {

    return (
      <article className="Article">
      
         <div>

          <div className="MovieList">
            <div className="MovieCard">
              <button className="MovieCard__btn MovieCard__btn--del">delete</button>
              <div className="MovieInfo__info">
                <h2 className="MovieInfo__title">Star Wars</h2>
                <p className="MovieInfo__descr">The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c...</p>
                <p className="MovieInfo__rating">Rating: 7/10</p>
              </div>
              <ul className="ChipsList">
                <li className="ChipsList__item">sci-fi</li>
                <li className="ChipsList__item">drama</li>
                <li className="ChipsList__item">action</li>
              </ul>
            </div>

            <div className="MovieCard">
              <button className="MovieCard__btn MovieCard__btn--del">delete</button>
              <div className="MovieInfo__info">
                <h2 className="MovieInfo__title">Star Wars2</h2>
                <p className="MovieInfo__descr">The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c...</p>
                <p className="MovieInfo__rating">Rating: 7/10</p>
              </div>
              <ul className="ChipsList">
                <li className="ChipsList__item">sci-fi</li>
                <li className="ChipsList__item">drama</li>
                <li className="ChipsList__item">action</li>
              </ul>
            </div>
        
            <div className="MovieCard">
              <button className="MovieCard__btn MovieCard__btn--del">delete</button>
              <div className="MovieInfo__info">
                <h2 className="MovieInfo__title">Star Wars3</h2>
                <p className="MovieInfo__descr">The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c...</p>
                <p className="MovieInfo__rating">Rating: 7/10</p>
              </div>
              <ul className="ChipsList">
                <li className="ChipsList__item">sci-fi</li>
                <li className="ChipsList__item">drama</li>
                <li className="ChipsList__item">action</li>
              </ul>
            </div>
        
            <div className="MovieCard">
              <button className="MovieCard__btn MovieCard__btn--del">delete</button>
              <div className="MovieInfo__info">
                <h2 className="MovieInfo__title">Star Wars4</h2>
                <p className="MovieInfo__descr">The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c...</p>
                <p className="MovieInfo__rating">Rating: 7/10</p>
              </div>
              <ul className="ChipsList">
                <li className="ChipsList__item">sci-fi</li>
                <li className="ChipsList__item">drama</li>
                <li className="ChipsList__item">action</li>
              </ul>
            </div>


          </div> 
        </div>
      </article>
    );
  }
}
