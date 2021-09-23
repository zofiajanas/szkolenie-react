import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserMenu = () => {
  const { user } = useContext(UserContext);

  return <div>Wybierz coś {user}</div>;
};

export default UserMenu;
