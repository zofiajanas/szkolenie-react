import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu';

import logo from './logo.svg';
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
  const themeType = 'dark';

  return (
    <ThemeProvider theme={themeType === 'light' ? themeLight : themeDark}>
      <div className='App'>
        <Header logo={logo} />
        <Menu items={menuItems} />
        <Menu items={menuItemsSecondary} column />
        {/* <Main/>
      <Footer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
