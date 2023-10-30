import './App.css'
import axios from 'axios';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getLocation(event) {
    event.preventDefault();
  

  const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
  

  const res = await axios.get(API);

    setLocation(res.data[0]);
      console.log(res)
  }

  return (
    <>
      <h1>Location API's</h1>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Location" />
        <button>Get Location</button>
      </form>

      <h2>{location.display_name}</h2>


    </>
  );
}

export default App
