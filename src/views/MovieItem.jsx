import 'bootstrap/dist/css/bootstrap.min.css'

const MovieItem = ({ movie }) => {
    return (

        <div className="col-2 data">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="h" />
            <h5>{movie.title}</h5>
            <p>{movie.vote_average}</p>
        </div>


    )
}

export default MovieItem;

