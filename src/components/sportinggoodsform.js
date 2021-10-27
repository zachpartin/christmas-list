import { useState } from "react";
import axios from "axios";

const SportingGoodsForm = ({ toggleFetch, setToggleFetch, Name, City, Wish }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [wish, setWish] = useState("");

  const sportingGoodsUrl =
    "https://api.airtable.com/v0/appc1Td9GbSJiwIfM/Sporting%20Goods?api_key=keyuw9Igy9sTDLK9o";

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("submitted");

    const newWish = {
      records: [
        {
          fields: {
            Name: name,
            Wish: wish,
            City: city,
          },
        },
      ],
    };

    await axios.post(sportingGoodsUrl, newWish);
    setToggleFetch(!toggleFetch);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <br />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(ev) => setCity(ev.target.value)}
        ></input>
        <br />
        <label htmlFor="wish"></label>Wish! <label />
        <input
          type="text"
          id="wish"
          value={wish}
          onChange={(ev) => setWish(ev.target.value)}
        ></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SportingGoodsForm;
