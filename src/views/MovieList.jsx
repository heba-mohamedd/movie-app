import React, { Component } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";
import Main from "../components/Main";

import 'bootstrap/dist/css/bootstrap.min.css'


class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            firstMovie: null,
            loading: true,
            error: null,
        }
    }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = async () => {
        try {
            const movies = await MovieController.getMovies();
            this.setState({ movies, loading: false, firstMovie: movies[0] })
        } catch (error) {
            console.log(error);
            this.setState({ error, loading: false, })
        }
    }
   


    render() {
        
        const { movies, firstMovie, loading, error } = this.state;

        if (loading) {
            return <h1>Loading...</h1>
        }

        if (error) {
            return <h1>Something went wrong</h1>
        }
        return (
            <div>

                {firstMovie && <Main firstMovie={firstMovie} />}

                <div className="row mb-3 mt-3">
                    <h2>New Realease</h2>

                </div>

                <div className="row">
                    {movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
                </div>


            </div>
        )


    }

}

export default MovieList;