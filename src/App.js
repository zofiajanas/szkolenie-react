import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

import logo from './logo.svg';

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
  return (
    <div className='App'>
      <Header logo={logo} />
      <Menu items={menuItems} />
      <Menu items={menuItemsSecondary} />
      {/* <Main/>
      <Footer/> */}
    </div>
  );
}

export default App;
