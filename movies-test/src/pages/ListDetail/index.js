import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function ListDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listDetail, setListDetail] = useState({ movies: [] });

  useEffect(() => {
    async function fetchListDetail() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/:tathy-collection/${id}`
        );
        console.log(response);
        setListDetail(response.data);
        console.log(listDetail);
      } catch (err) {
        console.log(err);
      }
    }
    fetchListDetail();
  }, [id]);

  // async function handleDelete() {
  //   try {
  //     await axios.delete(
  //       `https://ironrest.herokuapp.com/:tathy-collection/${id}`
  //     );

  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <>
      <h2>{listDetail.name}'s movies list</h2>
      <h5>List Title: {listDetail.listTitle}</h5>
      <div className="d-flex flex-row flex-wrap">
        {listDetail.movies.map((currentElement) => {
          return (
            <>
              <div key={id} style={{ width: "300px" }}>
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
                <button className="btn btn-danger">
                  {/* <button onClick={handleDelete} className="btn btn-danger"> */}
                  Delete Movie
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
