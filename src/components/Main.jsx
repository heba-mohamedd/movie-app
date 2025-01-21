import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



const Main = ({ firstMovie }) => {
    if (!firstMovie || !firstMovie.poster_path) {
        return <div></div>;
    }
    return (
        <div className="row">

            <div className="image-container">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${firstMovie.poster_path}`}
                    alt="image"
                    className="firstimage"
                />
                <div className="text-overlay">
                    <h3>{firstMovie.title}</h3>
                    <p>{firstMovie.vote_average}</p>
                </div>
            </div>

        </div>
    );
}
const styles = {
    span: {
        color: "gray",
    },

}


export default Main