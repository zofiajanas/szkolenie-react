import React, { useContext } from 'react';
import { UserContext } from '../User/UserContext';
import UserUp from '../User/UserUp';

const UpLabel = () => {
  const { setLightTheme } = useContext(UserContext);

  const handleChangeTheme = () => {
    setLightTheme(prev => !prev);
  };
  return (
    <>
      <UserUp />
      <button onClick={handleChangeTheme}>zmień theme</button>
    </>
  );
};

export default UpLabel;
