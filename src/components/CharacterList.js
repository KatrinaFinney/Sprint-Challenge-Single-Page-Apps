import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
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
        console.log("Rick and Morty Characters", response);
        setData(characters);
      });
  }, [query]);
 
  return (
     
      <div className="spell">
        <SearchForm />
       
        
      </div>
    
  );
}

