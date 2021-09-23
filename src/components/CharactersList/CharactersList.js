import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { API_HP_CHARACTERS } from '../../api';

const List = styled.ul`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;

const SingleItem = styled.li`
  width: 25vw;
  background-color: #ccc;
  margin: 20px;
  padding: 40px;

  img {
    width: 60%;
    height: auto;
  }
`;

const CharactersList = () => {
  const [characters, setCharacter] = useState([]);

  const getCharacters = async () => {
    try {
      const resp = await fetch(API_HP_CHARACTERS);
      const data = await resp.json();
      setCharacter(data);
    } catch (e) {
      console.log(e);
    }

    // fetch(API_HP_CHARACTERS)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     setCharacter(data);
    //   })
    //   .catch(err => console.log(err));
  };

  useEffect(() => {
    getCharacters();

    return () => {
      setCharacter([]);
    };
  }, []);

  const charactersRender = characters.map(char => (
    <SingleItem key={char.name}>
      <p>{char.name}</p>
      <p>{char.house}</p>
      <img src={char.image} alt={`${char.name}`} />
    </SingleItem>
  ));

  return <List>{charactersRender}</List>;
};

export default CharactersList;
