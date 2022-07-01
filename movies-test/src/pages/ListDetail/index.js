import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function ListDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listDetail, setListDetail] = useState({});

  useEffect(() => {
    async function fetchListDetail() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/:tathy-collection/${id}`
        );
        // console.log(response);
        setListDetail(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchListDetail();
  }, [id]);

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/:tathy-collection/${id}`
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h2>{listDetail.name}'s list</h2>
      <h5>List Title: {listDetail.listTitle}</h5>
      <p>MOVIES</p>
      <div className="d-flex flex-row flex-wrap">
        {listDetail.movies.map((currentElement) => {
          return (
            <>
              <img
                src={`https://themoviedb.org/t/p/w220_and_h330_face/.${currentElement.poster_path}`}
                height={120}
                alt="movie-logo"
              />
              <p>
                <strong>Title:</strong> {currentElement.original_title}
              </p>
              <p>
                <strong>Overview:</strong> {currentElement.overview}
              </p>
              <p>
                <strong>Vote Average:</strong> {currentElement.vote_average}
              </p>
              <p>
                <strong>Title:</strong> {currentElement.original_title}
              </p>
            </>
          );
        })}
        <button onClick={handleDelete} className="btn btn-danger">
          Delete List
        </button>
      </div>
    </>
  );
}
