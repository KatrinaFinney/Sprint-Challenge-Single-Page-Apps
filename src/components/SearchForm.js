import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

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
  const CharacterList = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  background: #fff;
  text-align: center;
  color: #12cbe4;
  padding: 10px;
  padding-top:30px;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 0 2rem;
  margin-bottom: 2rem;
`;

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
            <CharacterList className="character-list " key={data._id}>
              <h2>
                {data.name}
              </h2>
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Species: {data.species}</h3>
              <h3 className="capital">Gender: {data.gender}</h3>
              
            </CharacterList>
          );
        })}
      </div>
    </div>
  );
}
