import React from "react";
import "./MovieCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const MovieCard = ({ movies }) => {
    if (!movies || movies.length === 0) return null;

    function formatDate(dateString) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(dateString);
        const monthName = months[date.getMonth()];
        const day = date.getDay();
        const year = date.getFullYear();
        return `${monthName} ${day}, ${year}`
    }

    return ( 
        <div className="movie-body">
                <ul>
                    {movies.map(movie => (
                    <li key={movie.id}>
                        <img 
                            src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : './ErrorPopcorn.png'} 
                            alt={movie.title || 'No Title'}>
                        </img>
                        <div className="movie-text">
                            <h2>{movie.title}</h2>
                            <p><FontAwesomeIcon icon={faStar} />{Number(movie.vote_average).toFixed(1)}</p>
                            <h3>{formatDate(movie.release_date)}</h3>
                            <p>{movie.overview.slice(0, 250)}{movie.overview.length > 250 ? "..." : ""}</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        )
}

export default MovieCard;
