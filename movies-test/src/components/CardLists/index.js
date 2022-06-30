import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieListLogo from "../../assets/pictures/mlLogo.png";
import { Card, Col, Button } from "antd";

export function CardLists(props) {
  const { id } = useParams();

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/:tathy-collection/${props.id}`
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card
      title={`Movie List of ${props.name}`}
      style={{ width: 230, height: 300, margin: 10 }}
    >
      <img
        style={{ width: 100, height: 60, margin: 10 }}
        className="cardList-logo"
        src={MovieListLogo}
        alt="movieList-logo"
      />
      <div>
        <Link
          to={`/list/${props.id}`}
          className="btn btn-primary"
          style={{ margin: 10 }}
        >
          See List Details
        </Link>
        <button onClick={handleDelete} className="btn btn-danger" id={props.id}>
          Delete List
        </button>
      </div>
    </Card>
  );
}
