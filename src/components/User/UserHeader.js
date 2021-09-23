import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserHeader = () => {
  const { user } = useContext(UserContext);
  return <div> siemka {user}</div>;
};

export default UserHeader;
