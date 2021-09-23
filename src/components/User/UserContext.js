import { createContext, useState } from 'react';

export const UserContext = createContext({
  user: 'Wojtek',
  isLightTheme: false,
  setLightTheme: () => {},
});

const UserProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(false);

  const user = 'Mieszko';

  return (
    <UserContext.Provider
      value={{
        isLightTheme,
        setLightTheme,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
