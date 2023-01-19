import { useEffect, useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');

  const getMovies = async() => {
    fetch("http://localhost:3000/movies.json")
    .then(response => response.json())
    .then(data => setMovies(data))
  };

  useEffect(() => {
    getMovies();
  }, [value]);

  const filteredMovies = movies.filter(movie => {
    return movie.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <>
      <input type="text" onChange={event => setValue(event.target.value)}
      value={value}
      placeholder="Enter movies title..."/>

      <ul className="app">
        {movies &&
          filteredMovies.map((movie, index) => (
            <li key={index}>{movie.name}</li>
        ))
        }
      </ul>
    </>
  )
}

export default Movies;
