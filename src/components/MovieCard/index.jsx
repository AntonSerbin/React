import React from 'react';
import 'components/MovieCard/styles.css';
import PropTypes from 'prop-types';


const MovieCard = ({id,title,description, rating,image, deleteFilmCard}) => (

<div className="MovieCard" key={id} >
  <div className="MovieCard_image"> 
    <img src={image} alt="" className="MovieCard_image"/>
  </div>

  <button className="MovieCard__btn MovieCard__btn--del" onClick={deleteFilmCard}>delete</button>
  <div className="MovieInfo__info">
    <h2 className="MovieInfo__title">{title} </h2>
    <p className="MovieInfo__descr">{description}</p>
    <p className="MovieInfo__rating">{`Rating: ${rating}/10`}</p>
</div>

 
</div>

);


MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image:PropTypes.string,
  deleteFilmCard: PropTypes.func.isRequired
};


export default MovieCard;

      /* <ul className="ChipsList">
    <li className="ChipsList__item">sci-fi</li>
    <li className="ChipsList__item">drama</li>
    <li className="ChipsList__item">action</li>
  </ul>*/