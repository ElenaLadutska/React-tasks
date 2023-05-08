import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import getMoviesInfo from "./getMoviesInfo";
import Button from "./components/Button";
import Loader from "./components/Loader";
import ScrollButton from "./components/ScrollButton";

const Movies = (props) => {
  const { city } = props;

  let [isLoading, setLoading] = useState(false);

  const [movies, setMovies] = useState([]);

  const [value, setValue] = useState("");

  let [isError, setError] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([]);

  const [scrollTop, setScrollTop] = useState(0);

  let navigate = useNavigate();

  const getMovies = useCallback(() => {
    try {
      getMoviesInfo(city, setMovies);
      setLoading(false);
    } 
    catch (error) {
      setError(true);
      throw new Error("Something wrong with server")
    }
  }, [city]);

  const filterMovies = useCallback(
    () => 
    setFilteredMovies(movies?.filter(
      movie => movie.name.toLowerCase().includes(value.toLowerCase()))),
    [movies, value],
  );

  const navigateToTheLink = (path) => {
    navigate(`/${path}`)
  }

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    filterMovies()
  }, [filterMovies]);


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
      <div className="movies-container">
        <input 
          type="text" 
          onChange={event => setValue(event.target.value)}
          value={value}
          placeholder="Enter movies title..."
        />

        <ul className="movies">
          {!!movies?.length &&
            filteredMovies.map((
              { name, posterLink, eventId} , index) => (
                <li key={index}>
                  <img 
                    alt="movie"
                    src={posterLink}>
                  </img>

                  <p>
                    {name}
                  </p>

                  <Button 
                    title="Buy a ticket"
                    className="buy-ticket"
                    onClickFunc={() => navigateToTheLink(`movie-description/${eventId}`)}
                  />
                </li>
            ))
          }

          {
            !!movies?.length || (
              <div className="no-movies">We’ve found no movies, sorry!</div>
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
