import styled from 'styled-components';
import ButtonMui from '@material-ui/core/Button';

import { rotate } from '../../styles/LogoAnimation';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.primaryBg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.primaryTxt};

  .custom {
    font-size: 16px;
    margin: 20px;
  }
`;

export const Image = styled.img`
  height: 40vmin;
  pointer-events: none;

  animation: ${rotate} infinite 20s linear;
`;

export const Paragraph = styled.p``;

export const Link = styled.a`
  color: #61dafb;
`;

export const Button = styled(ButtonMui)`
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  color: ${({ theme }) => theme.button.color} !important;
  background-color: ${({ theme }) => theme.button.bg} !important;
  padding: 5px 25px !important;
  font-weight: bold !important;

  &:hover {
    background-color: white !important;
  }
`;
