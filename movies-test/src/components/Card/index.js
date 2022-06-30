import { Card, Col, Button } from "antd";

export function MovieCard({ currentElement }) {
  return (
    <Col>
      <Card
        title={currentElement.title}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img
          src={`https://themoviedb.org/t/p/w220_and_h330_face/.${currentElement.poster_path}`}
          height={120}
          alt="movie-logo"
        />
        {/* <p>
          <strong>Overview:</strong>
          {currentElement.overview}
        </p> */}
        <p>
          <strong>Release Date:</strong>
          {currentElement.release_date}
        </p>
        <p>
          <strong>Popularity:</strong>
          {currentElement.popularity}
        </p>
        <Button type="primary"> Add Movie </Button>
      </Card>
    </Col>
  );
}

// {<Link to={`/beers/${currentElement._id}`}> */}
