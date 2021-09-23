import React from 'react';

const UserUp = ({ isLightTheme, user }) => {
  return (
    <div>
      <span>{isLightTheme ? 'Za jasno? ' : 'Za ciemno? '}</span>
      <span>zmień to {user}!</span>
    </div>
  );
};

export default UserUp;
