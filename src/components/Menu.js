import React from 'react';
import styled from 'styled-components';

const MenuStyled = styled.menu`
  display: flex;
  list-style: none;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

const MenuItem = styled.li`
  margin: ${({ column }) => (column ? '20px 10px' : '0 10px')};

  a {
    text-decoration: none;
    padding: 10px 20px;
    color: black;
    transition: 0.3s;

    :hover {
      background-color: #ccc;
    }
  }
`;

const Menu = ({ items, column }) => {
  /*
      Nie jest to poprawne użycie znacznika "a". W React do nawigowania dostępne są odpowiednie biblioteki, np. react-router-dom, który udostępnia nam komponent "Link".
      Do nawigowania wewnątrz aplikacji (tak jak np. w menu strony), powinniśmy skorzystać z niego. Znacznik a służy do odnośników "zewnętrznych", np.: https://www.google.com/.
      Routing jest jednak bardzo rozległym tematem więc na potrzeby tego przykładu zostawię znacznik a.
      */

  const menuRender = items.map(item => (
    <MenuItem column={column}>
      <a href={item.url}>{item.name}</a>
    </MenuItem>
  ));

  return (
    <nav>
      <MenuStyled column={column}>{menuRender}</MenuStyled>
    </nav>
  );
};

export default Menu;
