import v4 from 'uuid/v4';
import React, {Component} from 'react';
import './styles.css';
import PropTypes from "prop-types";



export default class FormNewFilm extends Component {

_formSubmit = evt => {
      evt.preventDefault();
      if (this.descriptionInput.value.length < 320) {this.desc=this.descriptionInput.value}
        else (this.desc=this.descriptionInput.value.substr(0, 320));
      this.title= (this.titleInput.value.length < 40)? this.title=this.titleInput.value :this.title=this.titleInput.value.substr(0, 40);
      const filmsData = {
      id: v4(),
      title: this.title,
      description: this.desc,
      image: this.titleImage.value,
      rating: this.ratingInput.value};
    if ((this.desc==="")||(this.title==="")||(this.ratingInput.value==='')) {alert ("Please, enter all necessary fields")}
      else{
      this.props.addFilm(filmsData);
      this.titleImage.value="";
      this.titleInput.value="";
      this.descriptionInput.value="";
      this.ratingInput.value=0;
    };
};


  render() {

    return (

<form onSubmit={this._formSubmit} className="MovieForm">
 
  <label className="MovieForm__label">Title
     <input 
        type="text" 
        className="MovieForm__input" 
        placeholder="Title" 
        ref={node => {
          this.titleInput = node;
        }}
      />
  </label>

  <label className="MovieForm__label">Image link
     <input 
        type="text" 
        className="MovieForm__input" 
        placeholder="url" 
        ref={node => {
          this.titleImage = node;
        }}
      />
  </label>

  <label className="MovieForm__label">Description
    <textarea 
      className="MovieForm__txtarea" 
      rows="7" 
      placeholder="Description"
      ref={node => {
        this.descriptionInput = node;
      }}
      ></textarea>
  </label>

  <label className="MovieForm__label">Rating
    <select 
      className="MovieForm__input"
      ref={node=>this.ratingInput=node}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
  </label>

   <button className="MovieForm__submit" type="submit">submit</button>

</form>
    
    )
  }

}
FormNewFilm.propTypes = {
  addFilm: PropTypes.func.isRequired
};