import React from 'react';
import MovieCard from 'components/MovieCard'
import './styles.css';
import PropTypes from "prop-types";



const ListMovieCards = ({currentBaseOfFilms, deleteFilmArticle}) => (
  <div className="MovieList">

    {currentBaseOfFilms.map(film=>(

	   	<MovieCard
        key= {film.id}
      	title = {film.title.substr(0, 40)}
      	description ={film.description.substr(0, 180)}
      	rating = {film.rating}
        image = {film.image}
      	deleteFilmCard = {() => {
		        deleteFilmArticle(film.id);}}
      	/>
    ))}

   </div>
 );

ListMovieCards.propTypes = {
  className: PropTypes.string,
  currentBaseOfFilms: PropTypes.array.isRequired,
  deleteFilmArticle: PropTypes.func.isRequired
};

export default ListMovieCards;

// {console.log("Массив в Article",currentBaseOfFilms)}