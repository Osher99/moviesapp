import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../actions"
import _ from 'underscore';

export const useHomePage = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies, _.isEqual);
  
    useEffect(() => {
        dispatch(getMovies(''));
    }, [dispatch]);
    
    const handleOnChange = useCallback((e) => {
        dispatch(getMovies(e.target.value));
    }, [dispatch]);
  
    const handleOnSubmit = (e) => {
        e.preventDefault();
    };
  
    return {
        movies,
        handleOnChange,
        handleOnSubmit
    };
};
