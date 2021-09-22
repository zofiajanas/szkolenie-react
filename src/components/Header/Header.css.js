import styled from 'styled-components';
import ButtonMui from '@mui/material/Button';

export const HeaderStyled = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .custom {
    font-size: 16px;
    margin: 20px;
  }
`;

export const Image = styled.img``;

export const Paragraph = styled.p``;

export const Link = styled.a`
  color: #61dafb;
`;

export const Button = styled(ButtonMui)`
  margin-top: 10px;
  margin-bottom: 10px;
  color: red;
  background-color: black;
  padding: 5px 25px;
  font-weight: bold;

  &:hover {
    background-color: white;
  }
`;
