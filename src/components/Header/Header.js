import React from 'react';

import { HeaderStyled, Link, Image, Paragraph } from './Header.css';

const Header = props => {
  // const Header = ({ logo }) => {
  return (
    <HeaderStyled className='App-header'>
      <Image src={props.logo} className='App-logo' alt='logo' />
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <Paragraph>
        Edit <code>src/App.js</code> and save to reload.
      </Paragraph>
      <Link
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </Link>
    </HeaderStyled>
  );
};

export default Header;
