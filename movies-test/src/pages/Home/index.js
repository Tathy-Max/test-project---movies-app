import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardLists } from "../../components/CardLists";

export function Home() {
  const [movielists, setMovieLists] = useState([]);
  useEffect(() => {
    async function fetchMovieLists() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/:tathy-collection"
        );
        // console.log(response);
        setMovieLists([...response.data]);
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovieLists();
  }, [movielists]);
  return (
    <>
      <div className="mb-5">
        <h2>Create your own movie list here</h2>
        <Link to="/moviesList">
          <button className="btn btn-outline-dark btn large col-4 mx-auto">
            Start
          </button>
        </Link>
      </div>
      <h2>Choose an existent movie list here</h2>
      <div className="d-flex flex-row flex-wrap">
        {movielists.map((currentList) => {
          return <CardLists name={currentList.name} id={currentList._id} />;
        })}
      </div>
    </>
  );
}
