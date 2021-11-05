import React from 'react';
import { IMGPATH, BLANKIMGPATH } from '../config/urls';

const setVoteAverageClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else if (vote === 0) {
        return "na";
    } 
    else {
        return "red";
    }
}

const Movie = ({ title, poster_path, overview, vote_average }) =>(
    <div className="movie">
        <img src={poster_path ? IMGPATH + poster_path : BLANKIMGPATH} alt={title} />
        <div className="movie-info">
        <h2>{title}</h2>
        <span className={`tag ${setVoteAverageClass(vote_average)}`}>{vote_average === 0 ? 'N/A' : vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;