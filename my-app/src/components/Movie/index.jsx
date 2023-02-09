import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Cinemas from "../Cinemas";

function Movie(props) {
  const {id} = useParams();

  const [movie, setMovies] = useState([]);

  let [isError, setIsError] = useState(false);

  const getMovie = async() => {
    try {
      fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${id}%22,%22city%22:%22${props.city}%22%7D&extended=true`)
      .then(response => response.json())
      .then(data => setMovies(data));
    } catch (error) {
      setIsError(isError = true);
      console.log(isError)
    }
  };

  useEffect(() => {
    getMovie()}, 
    [id]
  );

  return(
    <>
      {!!movie?.length &&
          movie.map((film, index) => {
            return (
              <div className="movie"
               key={index}>
  
                <img 
                  alt="movieImg"
                  src={film.posterLink}>
                </img>
  
                <div className="movieInfo">
                  <h1>{film.name}</h1>
  
                  <h3>{film.annotation} </h3>
  
                  <h4>Длительность: {film.runTime} минут</h4>
                </div>

                <div className="cinemas">
                  {<Cinemas film={film}/>}
                </div>
              </div>
          )
          })
        }

        {
          isError && (
            <div className="error">Oops, something went wrong</div>
          )
        }
    </>
  )
}

export default Movie;
