import { useState } from "react";
import axios from "axios";

export function NewList() {
  const [form, setForm] = useState({
    name: "",
    listTitle: "",
    movies: "[]",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  console.log(form);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const sent = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        form
      );
      console.log(sent);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <form>
          <label htmlFor="input-name">Nome:</label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
          />
          <label htmlFor="input-tagline">Tagline:</label>
          <input
            name="tagline"
            onChange={handleChange}
            value={form.tagline}
            type="text"
          />
          <label htmlFor="input-description">Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={form.description}
            type="text"
          />
          <label htmlFor="input-first_brewed">First Brewed:</label>
          <input
            name="first_brewed"
            onChange={handleChange}
            value={form.first_brewed}
            type="text"
          />
          <label htmlFor="input-brewers_tips">Brewers Tips:</label>
          <input
            name="brewers_tips"
            onChange={handleChange}
            value={form.brewers_tips}
            type="text"
          />
          <label htmlFor="input-attenuation_level">Attenuation Level:</label>
          <input
            name="attenuation_level"
            onChange={(e) =>
              setForm({ ...form, attenuation_level: Number(e.target.value) })
            }
            value={form.attenuation_level}
            type="text"
          />
          <label htmlFor="input-contributed_by">Contributed By:</label>
          <input
            name="contributed_by"
            onChange={handleChange}
            value={form.contributed_by}
            type="text"
          />

          <button type="submit" onClick={handleSubmit}>
            ADD NEW
          </button>
        </form>
      </div>
    </>
  );
}
