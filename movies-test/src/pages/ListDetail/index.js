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
  }, []);

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
      <h1>{listDetail.name}'s list</h1>
      <h2>List Title: {listDetail.listTitle}</h2>
      <ul>
        <li>Movies</li>
      </ul>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete List
      </button>
    </>
  );
}
