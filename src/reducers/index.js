const GET_MOVIES = 'GET_MOVIES';
const SET_MOVIES = 'SET_MOVIES';

const initalState = {
    movies: []
};

const moviesReducer = (state = initalState, action) => {
    switch (action.type) {
       case GET_MOVIES:
          return { ...state };
          case SET_MOVIES:
              const { movies } = action;
        return { ...state, movies }
       default:
          return state;
     }
  };
export default moviesReducer;