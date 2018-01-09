import v4 from 'uuid/v4';
import React, {Component} from 'react';
import './styles.css';
import Header from 'components/Header';
import ListMovieCards from 'components/ListMovieCards';
import FormNewFilm from 'components/FormNewFilm';
import { fetchData } from 'API';

      
export default class App extends Component {

state = {
    films:[]
    };

componentWillMount() {
  const searchPopular = `/movie/popular?api_key=f24a0fd18f52218851075901c5a108a0&page=1&`;
  fetchData(searchPopular).then(arrPopular => {
    arrPopular.map(newFilm=>{
        const ourNewFilm = {
          id: newFilm.id,
          title: newFilm.title,
          description: newFilm.overview,
          rating: newFilm.vote_average,
          image: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${newFilm.poster_path}`
        };
        const newBase = [...this.state.films,ourNewFilm];
        this.setState({films:newBase});
        });
       console.log("State:", this.state);
  });
  };
 
addFilm = (newFilm) => {
 
  console.log("prevState.filmsAPP:", this.state.films);
  console.log("newFilmAPP:", newFilm);
  const newBase = [newFilm,...this.state.films];
  this.setState({films:newBase});
  console.log("newBaseAPP:", this.state.films);
  };

deleteFilm = id => {

let list  = this.state.films;
console.log("DeleteFilm list of films", list);
console.log("DeleteFilm ID", id);
let newBaseOfFilms = list.filter((film) => film.id !== id);
this.setState({films:newBaseOfFilms});
console.log(newBaseOfFilms);
}

  render() {

    return (
      <div className="App">
        <Header />
  	    <ListMovieCards 
          className = "Article"
          currentBaseOfFilms={this.state.films} 
          deleteFilmArticle={this.deleteFilm}
        />
        <FormNewFilm addFilm={this.addFilm}/>
     </div>
    );
  }
}


