import {
    IMGPATH, BLANKIMGPATH, IMDB_SEARCH, YTS_MX_SEARCH
} from '../../config/urls';
import { setVoteAverageClass } from './utils';
import IMDB from '../../assets/imdb.svg';
import Y2S from '../../assets/yts-mx.svg';

const Movie = ({ title, poster_path, overview, vote_average }) => {
    const voteRounded = Math.round(vote_average);
    return (
    <div className="movie">
        <img className="poster" src={poster_path ? IMGPATH + poster_path : BLANKIMGPATH} alt={title} />
        <div className="movie-info">
            <h2>{title}</h2>
            <span className={`tag ${setVoteAverageClass(voteRounded)}`}>{voteRounded === 0 ? 'N/A' : voteRounded}</span>
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p className="overview">{overview}</p>
            <div className='link-imgs'>
                <a className="imdb-a" target="_blank" rel="noopener noreferrer" href={`${IMDB_SEARCH}${title}`}><img className="imdb-a" src={IMDB} alt="imdb" /></a>
                <a className="yts-a" target="_blank" rel="noopener noreferrer" href={`${YTS_MX_SEARCH}${title}`}><img className="yts-a" src={Y2S} alt="y2s" /></a>
            </div>
        </div>
    </div>
    )
};

export default Movie;