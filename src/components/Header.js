import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
font-family: "Source Sans Pro", sans-serif;
font-size: 4.8rem;
color: dodgerblue;
text-align: center;
`;
export default function Header() {
 

  return (
    <header className="ui centered">
  
      <Title>Rick &amp; Morty Fan Page</Title>
    </header>
  );
}
