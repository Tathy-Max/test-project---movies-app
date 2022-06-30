import axios from "axios";
import { useState, useEffect } from "react";
import { MovieCard } from "../../components/Card";
import { Link } from "react-router-dom";

export function MoviesList() {
  const [movies, setMovies] = useState([{}]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=80b73cedff8d60fcdfac7b6c89d2396e"
        );
        console.log(response);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovies();
  }, []);
  //   console.log(response);
  return (
    <>
      <div>
        <p>TESTANDO</p>
        {movies.map((currentElement) => {
          return <MovieCard currentElement={currentElement} />;
        })}
      </div>
    </>
  );
}
