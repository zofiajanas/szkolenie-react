import React from 'react';

import * as S from './Header.css';

const Header = props => {
  // const Header = ({ logo }) => {
  return (
    <S.HeaderStyled className='App-header'>
      <S.Image src={props.logo} className='App-logo' alt='logo' />
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <S.Paragraph>
        Edit <code>src/App.js</code> and save to reload.
      </S.Paragraph>
      <S.Link
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </S.Link>
    </S.HeaderStyled>
  );
};

export default Header;
