import v4 from 'uuid/v4';
import React, {Component} from 'react';
import './styles.css';
import PropTypes from "prop-types";

export default class FormSearchFilm extends Component {


  render() {

    return (
<div className="FormSeachFilm">

  <form 
    onSubmit={
      evt => {
        evt.preventDefault();
        this.props.getFilmsByAPI(`/search/movie?api_key=f24a0fd18f52218851075901c5a108a0&page=1&&query=${this.searchFilm.value}`);
        }
    }
    >
      <label className="FormSearchFilm">
      <input 
        type="text" 
        className="FormSearchFilm__input" 
        placeholder="Enter search" 
        ref={node => {
          this.searchFilm = node;
        }}
      />
      </label>
  </form>
  <div className="Search-categories">
    <button onClick={()=>this.props.getFilmsByAPI(`/movie/popular?api_key=f24a0fd18f52218851075901c5a108a0&page=1&`)} className="ButtonSearchFilm">POPULAR</button>
    <button onClick={()=>this.props.getFilmsByAPI(`/movie/top_rated?api_key=f24a0fd18f52218851075901c5a108a0&page=1&`)} className="ButtonSearchFilm" >TOP RATED</button>
    <button onClick={()=>this.props.getFilmsByAPI(`/movie/upcoming?api_key=f24a0fd18f52218851075901c5a108a0&page=1&`)} className="ButtonSearchFilm">UPCOMING</button>
  </div>
</div>
    )
  }

}
