import { useHomePage } from "./hooks/useHomePage";
import Movie from "../../components/Movie";

export const HomePage = () => {
    const { movies, handleOnChange, handleOnSubmit } = useHomePage();
    return (
        <>
        <header>
          <h2>Movies Database&nbsp;&nbsp;
            <span className="appAuther">By Osher Dror</span>
          </h2>
          <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." onChange={handleOnChange}/>
            </form>
        </header>
        <div className="movie-container">
         {movies && movies.length > 0 && movies.map((movie) => {
           return <Movie key={movie.id} {...movie} />
         })}
        </div>
        </>
    );
};
