const GET_MOVIES = 'GET_MOVIES';
const SET_MOVIES = 'SET_MOVIES';

export const getMovies = (searchVal) => ({
    type: GET_MOVIES,
    searchVal
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
});

