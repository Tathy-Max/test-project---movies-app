import axios from "axios";
import { useState, useEffect } from "react";
import { MovieCard } from "../../components/Card";
import { Form } from "../../components/Form";

export function MoviesList() {
  const [movies, setMovies] = useState([{}]);

  const [form, setForm] = useState({
    name: "",
    listTitle: "",
    movies: [],
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=80b73cedff8d60fcdfac7b6c89d2396e"
        );
        // console.log(response);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovies();
  }, []);
  console.log(form);
  return (
    <>
      <div className="form">
        <Form form={form} setForm={setForm} />
      </div>
      <div className="d-flex flex-row flex-wrap">
        {movies.map((currentElement) => {
          return (
            <MovieCard
              currentElement={currentElement}
              form={form}
              setForm={setForm}
            />
          );
        })}
      </div>
    </>
  );
}
