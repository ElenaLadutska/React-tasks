import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "./components/Button";
import Loader from "./components/Loader";
import ScrollButton from "./components/ScrollButton";

function Movies(props) {
  let [isLoading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);

  const [value, setValue] = useState("");

  let [isError, setError] = useState(false);

  const getMovies = async() => {
    try {
      fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${props.city}%7D&extended=true`)
        .then(response => response.json())
        .then(data => setMovies(data));

      setLoading(isLoading = false);
    } 
    catch (error) {
      setError(isError = true);
      throw new Error("Something wrong with server")
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = useCallback(
    () => {
      setFilteredMovies(movies.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase())))
    },
    [movies, value],
  );

  useEffect(() => {
    filterMovies()
  }, [filterMovies]);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isLoading ? <Loader /> : (
      <div className="moviesContainer">
        <input 
          type="text" 
          onChange={event => setValue(event.target.value)}
          value={value}
          placeholder="Enter movies title..."
        />

        <ul className="movies">
          {!!movies?.length &&
            filteredMovies.map((movie, index) => (
              <li key={index}>
                <img 
                  alt="movieImg"
                  src={movie.posterLink}>
                </img>

                <p>
                  {movie.name}
                </p>

              <Link to={`/movie-description/${movie.eventId}`}>
                <Button 
                    id={index} 
                    title="Buy a ticket"
                />
              </Link>
              </li>
          ))
          }

          {
            !!movies.length || (
              <div className="noMovies">We’ve found no movies, sorry!</div>
            )
          }

          {
            isError && (
              <div className="error">Oops, something went wrong</div>
            )
          }
        </ul>

        {
          scrollTop > 200 ? <ScrollButton /> : ""
        }
      </div>
    )
  )
}

export default Movies;
