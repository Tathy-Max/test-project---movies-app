import { Card, Col, Button } from "antd";
import { Toaster, toast } from "react-hot-toast";

export function MovieCard({ currentElement, form, setForm }) {
  function handleAddMovie(currentElement) {
    console.log(currentElement);
    setForm({ ...form, movies: [...form.movies, currentElement] });
    toast.success("The movie was added successfully!");
  }
  return (
    <Col>
      <div>
        <Toaster />
      </div>
      <Card
        title={currentElement.title}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img
          src={`https://themoviedb.org/t/p/w220_and_h330_face/.${currentElement.poster_path}`}
          height={120}
          alt="movie-logo"
        />
        <p>
          <strong>Release Date:</strong>
          {currentElement.release_date}
        </p>
        <p>
          <strong>Popularity:</strong>
          {currentElement.popularity}
        </p>
        <Button
          type="primary"
          onClick={() => {
            handleAddMovie(currentElement);
          }}
        >
          Add Movie
        </Button>
      </Card>
    </Col>
  );
}
