import axios from "axios"
import MovieModel from "../models/MovieModel"

class MovieController{
    static async getMovies(){
        try{
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');

            return response.data.results.map(movie => new MovieModel(movie.id, movie.title, movie.poster_path, movie.vote_average))
            
        }catch(err){
            console.log("Error" , err);
        }
    }
}

export default MovieController;