import { useState } from "react";
import axios from "axios";

export function Form() {
  const [form, setForm] = useState({
    name: "",
    listTitle: "",
    movies: "[{}]",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  console.log(form);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const sent = await axios.post(
        "https://ironrest.herokuapp.com/:tathy-collection",
        form
      );
      console.log(sent);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="d-flex flex-column m-4">
        <form className="d-flex flex-column">
          <h2>Create your list here</h2>
          <label htmlFor="input-name">Name:</label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
          />
          <label htmlFor="input-listTitle">List Title:</label>
          <input
            name="listTitle"
            onChange={handleChange}
            value={form.listTitle}
            type="text"
          />
          <button
            className="btn btn-primary d-grid gap-2"
            type="submit"
            onClick={handleSubmit}
          >
            Create List
          </button>
        </form>
      </div>
    </>
  );
}
