import React from 'react';

const Menu = ({ items }) => {
  /*
      Nie jest to poprawne użycie znacznika "a". W React do nawigowania dostępne są odpowiednie biblioteki, np. react-router-dom, który udostępnia nam komponent "Link".
      Do nawigowania wewnątrz aplikacji (tak jak np. w menu strony), powinniśmy skorzystać z niego. Znacznik a służy do odnośników "zewnętrznych", np.: https://www.google.com/.
      Routing jest jednak bardzo rozległym tematem więc na potrzeby tego przykładu zostawię znacznik a.
      */

  const menuRender = items.map(item => (
    <li>
      <a href={item.url}>{item.name}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{menuRender}</ul>
    </nav>
  );
};

export default Menu;
