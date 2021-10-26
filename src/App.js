import "./App.css";
import Electronics from "./components/electronics.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Homepage from "./components/homepage.js";
import ElectronicsForm from "./components/electronicsform.js";
import ToysForm from "./components/toysform.js";
import Toys from "./components/toys.js";
import OtherForm from "./components/otherform.js";
import Other from "./components/other.js";

function App() {
  const [electronics, setElectronics] = useState([]);
  const [toys, setToys] = useState([]);
  const [other, setOther] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  const electronicsUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Electronics?api_key=keyuw9Igy9sTDLK9o";
  const toysUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Toys?api_key=keyuw9Igy9sTDLK9o";
  const otherUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Other?api_key=keyuw9Igy9sTDLK9o";

  useEffect(() => {
    const getElectronics = async () => {
      const resp = await axios.get(electronicsUrl);
      console.log(resp.data.records);
      setElectronics(resp.data.records);
    };
    getElectronics();
  }, [toggleFetch]);

  useEffect(() => {
    const getToys = async () => {
      const resp = await axios.get(toysUrl);
      console.log(resp.data.records);
      setToys(resp.data.records);
    };
    getToys();
  }, [toggleFetch]);

  useEffect(() => {
    const getOther = async () => {
      const resp = await axios.get(otherUrl);
      console.log(resp.data.records);
      setOther(resp.data.records);
    };
    getOther();
  }, [toggleFetch]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/toys">Toys</Link>
        <Link to="/sportinggoods">Sporting Goods</Link>
        <Link to="/other">Other</Link>
      </nav>

      <Route path="/" exact>
        <Homepage />
      </Route>

      <Route path="/electronics">
        <h1>Electronics</h1>

        <ElectronicsForm
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />

        {electronics.map((electronic) => (
          <Electronics
            key={electronic.id}
            name={electronic.fields.Name}
            city={electronic.fields.City}
            wish={electronic.fields.Wish}
          />
        ))}
      </Route>

      <Route path="/toys">
        <h1>Toys</h1>

        <ToysForm setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />

        {toys.map((toy) => (
          <Toys
            key={toy.id}
            name={toy.fields.Name}
            city={toy.fields.City}
            wish={toy.fields.Wish}
          />
        ))}
      </Route>

      <Route path="/other">
        <h1>Other</h1>

        <OtherForm setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />

        {other.map((other) => (
          <Other
            key={other.id}
            name={other.fields.Name}
            city={other.fields.City}
            wish={other.fields.Wish}
          />
        ))}
      </Route>

      <Route path="/sportinggoods"></Route>
    </div>
  );
}

export default App;
