import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { API_HP_CHARACTERS, API_HP_CHARACTERS_HOUSE } from '../../api';
import SearchCharacter from './SearchCharacter';
import HouseButtons from './HouseButtons';

const Wrapper = styled.div`
  background-color: #250101;
  padding-top: 40px;
  min-height: 100vh;
`;

const List = styled.ul`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  list-style: none;
`;

const SingleItem = styled.li`
  width: 25%;
  background-color: #e9e7e7;
  margin: 20px;
  padding: 40px;

  img {
    width: 60%;
    height: auto;
  }
`;

const CharactersList = () => {
  const [basicCharacters, setBasicCharacter] = useState([]);
  const [characters, setCharacter] = useState([]);

  const getCharacters = async () => {
    try {
      const resp = await fetch(API_HP_CHARACTERS);
      const data = await resp.json();
      setCharacter(data);
      setBasicCharacter(data);
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

  const searchCharacter = _.debounce(value => {
    const searchResult = basicCharacters.filter(char =>
      char.name.toUpperCase().includes(value.toUpperCase())
    );
    setCharacter(searchResult);
  }, 500);

  const getHouse = async house => {
    const resp = await fetch(`${API_HP_CHARACTERS_HOUSE}${house}`);
    const data = await resp.json();
    setCharacter(data);
    setBasicCharacter(data);
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

  return (
    <Wrapper>
      <SearchCharacter searchCharacter={searchCharacter} />
      <HouseButtons getHouse={getHouse} getCharacters={getCharacters} />
      <List>{charactersRender}</List>
    </Wrapper>
  );
};

export default CharactersList;
