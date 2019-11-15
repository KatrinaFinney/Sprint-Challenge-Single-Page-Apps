import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`, {
       
      })
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("rick and morty characters", response);
        setData(characters);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="spells">
      <form className="search" >
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {data.map(data => {
          return (
            <div className="character-list " key={data._id}>
              <h2>
                <span aria-label="wheel of dharma" role="img">
                
                </span>
                {data.name}
              </h2>
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Species: {data.species}</h3>
              <h3 className="capital">Gender: {data.gender}</h3>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
