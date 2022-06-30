import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function ListDetail() {
  const { id } = useParams();
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
  return (
    <>
      <h1>{listDetail.name}'s list</h1>
      <ul>
        <li>List Title: {listDetail.listTitle}</li>
      </ul>
    </>
  );
}
