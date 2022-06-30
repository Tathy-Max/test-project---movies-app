import { Link } from "react-router-dom";

export function CardLists(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="cardList-logo"
        src={"../../assets/pictures/mlLogo.png"}
        alt="movieList-logo"
      />
      cd
      <div className="card-body">
        <h5 className="card-title">{`Movie List de ${props.name}`}</h5>
        <Link to={`/list/${props.id}`} className="btn btn-primary">
          See List Details
        </Link>
      </div>
    </div>
  );
}
