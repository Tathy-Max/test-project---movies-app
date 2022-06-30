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
  }, []);
  return (
    <>
      <div className="createList-form">
        <h1>Create your own movie list here</h1>
        <Link to="/moviesList">
          <button className="btn btn-outline-dark btn-lg">Start</button>
        </Link>
      </div>
      <div className="createdLists">
        <h1>Choose an existent movie list here</h1>
        {movielists.map((currentList) => {
          return <CardLists name={currentList.name} id={currentList._id} />;
        })}
      </div>
    </>
  );
}
