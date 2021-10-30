import { takeEvery, all } from 'redux-saga/effects';
import { handleGetMovies } from './handlers';

const GET_MOVIES = 'GET_MOVIES';


function* moviesWatcher() {
    yield takeEvery(GET_MOVIES, handleGetMovies);
}

export default function* rootSaga() {
    yield all([
        moviesWatcher()
    ]);
}