import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu';
import UserUp from './components/User/UserUp';

import logo from './logo.svg';
import GlobalStyle from './styles/GlobalStyle';
import { themeDark, themeLight } from './styles/theme';

const menuItems = [
  { id: 1, name: 'Strona główna', url: '/' },
  { id: 2, name: 'Produkty', url: '/produts' },
  { id: 3, name: 'Kontakt', url: '/contact' },
];

const menuItemsSecondary = [
  { id: 1, name: 'Strona główna', url: '/' },
  { id: 2, name: 'Zabawki', url: '/toys' },
  { id: 3, name: 'Lokalizacja', url: '/location' },
];

function App() {
  const [isLightTheme, setLightTheme] = useState(false);

  const user = 'Wojtek';

  const handleChangeTheme = () => {
    console.log('idzie funkcja');
    setLightTheme(prev => !prev);
  };

  useEffect(() => {
    console.log('lecę');

    // return () => {
    //   cleanup
    // }
  }, [isLightTheme]);

  return (
    <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
      <GlobalStyle />
      <div className='App'>
        <UserUp user={user} isLightTheme={isLightTheme} />
        <button onClick={handleChangeTheme}>zmień theme</button>
        <Header logo={logo} user={user} />
        <Menu items={menuItems} user={user} />
        <Menu items={menuItemsSecondary} column user={user} />
        {/* <Main/>
      <Footer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
