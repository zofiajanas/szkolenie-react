import { useContext } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import CharactersList from './components/CharactersList/CharactersList';
import Header from './components/Header/Header';
import Menu from './components/Menu';
import UpLabel from './components/UpLabel/UpLabel';
import { UserContext } from './components/User/UserContext';

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
  const { isLightTheme, setLightTheme } = useContext(UserContext);

  useEffect(() => {
    console.log('lecę');

    // return () => {
    //   cleanup
    // }
  }, [isLightTheme, setLightTheme]);

  return (
    <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
      <GlobalStyle />
      <div className='App'>
        <UpLabel />
        <Header logo={logo} />
        <Menu items={menuItems} />
        <Menu items={menuItemsSecondary} column />
        <CharactersList />
        {/* <Main/>
      <Footer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
