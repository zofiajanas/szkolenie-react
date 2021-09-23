import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserUp = () => {
  const { user, isLightTheme } = useContext(UserContext);

  return (
    <div>
      <span>{isLightTheme ? 'Za jasno? ' : 'Za ciemno? '}</span>
      <span>zmień to {user}!</span>
    </div>
  );
};

export default UserUp;
