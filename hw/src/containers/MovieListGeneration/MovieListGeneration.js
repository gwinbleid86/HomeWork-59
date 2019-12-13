import React, {Component} from 'react';
import nanoid from 'nanoid';
import MovieInputForm from "../../components/movies/InputForm/InputForm";
import MovieList from "../../components/movies/MovieList/MovieList";

class MovieListGeneration extends Component {
    state = {
        films: [],
        isMovieTitleEntered: false,
        newFilmTitle:""
    };

    currentMovieName = event => {
        let newFilmTitle = event.target.value;
        let isMovieTitleEntered = newFilmTitle !== "";
        this.setState({newFilmTitle, isMovieTitleEntered});
    };
    editFilmTitle = (event, id) => {
        let films = [...this.state.films];
        const index = this.state.films.findIndex(f => f.id === id);
        films[index].title = event.target.value;
        localStorage.setItem('films', JSON.stringify(films));
        this.setState({films});
    };
    addNewFilm = () =>{
        let films = [...this.state.films];
        let newFilm = {
            title: this.state.newFilmTitle,
            id: nanoid()
        };
        films.push(newFilm);
        document.getElementById("addMovie").value = "";
        localStorage.setItem('films', JSON.stringify(films));
        this.setState({films, newFilmTitle:"",isMovieTitleEntered: false})
    };
    deleteFilm = (id) =>{
        let films = [...this.state.films];
        const index = this.state.films.findIndex(f => f.id === id);
        films.splice(index, 1);
        localStorage.setItem('films', JSON.stringify(films));
        this.setState({films});
    };
    componentDidMount() {
        let films =  JSON.parse(localStorage.getItem("films") || "[]");
        this.setState({films});
    }

    render() {
        return (
            <div style={{width:'48%'}}>
                <MovieInputForm onChange={this.currentMovieName} isMovieTitleEntered={this.state.isMovieTitleEntered} onClick={this.addNewFilm}/>
                <MovieList films={this.state.films} onChange={this.editFilmTitle} deletefilm={this.deleteFilm}/>
            </div>
        );
    }
}

export default MovieListGeneration;