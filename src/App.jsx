import './App.css'
import axios from 'axios';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  // const [map, setMap] = useState();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  // function handleMap(event) {
  //   setMap(event.map.value)
  // }

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
        <button>Explore!</button>
      </form>

      <h2>{location.display_name}</h2>
      <h2>{location.lat}</h2>
      <h2>{location.lon}</h2>


    </>
  );
}

export default App
