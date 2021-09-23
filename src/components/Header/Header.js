import React from 'react';
import UserHeader from '../User/UserHeader';

import * as S from './Header.css';

const Header = props => {
  // const Header = ({ logo }) => {
  return (
    <S.HeaderStyled className='App-header'>
      <UserHeader user={props.user} />
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
      <span className='custom'>tekst z klasą!</span>
      <S.Button>Kliknij</S.Button>
    </S.HeaderStyled>
  );
};

export default Header;
