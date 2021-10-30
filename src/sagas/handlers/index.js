import {call,put } from 'redux-saga/effects';
import { getMovies, getSearchMovies } from '../requests';
import { setMovies } from '../../actions';

export function* handleGetMovies(action) {
     try {
         if (action.searchVal === ''){
         const response = yield call(getMovies)
         const { results  } = response;
         yield put(setMovies(results));
         } else {
            const response = yield call(getSearchMovies, action.searchVal)
            const { results  } = response;
            yield put(setMovies(results));
         }
     } catch (e) {
         console.log(e);
     }
}


