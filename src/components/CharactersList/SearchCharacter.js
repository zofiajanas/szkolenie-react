import React from 'react';
import styled from 'styled-components';
// import { useRef } from 'react';

const Label = styled.label`
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  margin: 20px 0;
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  width: 60%;
  font-size: 20px;
  box-shadow: 0 7px 13px 2px #000;
  margin: 0 auto;
`;

const SearchCharacter = ({ searchCharacter }) => {
  const handleSearch = value => {
    searchCharacter(value);
  };

  return (
    <>
      <Label htmlFor='name'>Wyszukaj postać</Label>
      <Input id='name' onChange={e => handleSearch(e.target.value)} />
    </>
  );
};

export default SearchCharacter;
