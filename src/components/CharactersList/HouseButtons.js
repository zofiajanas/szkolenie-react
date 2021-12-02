import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const Button = styled.button`
  border: 3px solid ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 15px 40px;
  margin: 50px 30px 20px;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'wait' : 'pointer')};

  opacity: ${({ disabled }) => disabled && 0.3};

  :hover {
    transform: ${({ disabled }) => (disabled ? '' : 'scale(1.1)')};
  }
`;

const Text = styled.p`
  color: white;
`;

const buttonsData = [
  { name: 'Gryffindor', color: '#500404', bg: '#e59393' },
  { name: 'Slytherin', color: '#132e01ed', bg: '#cbf1b1ec' },
  { name: 'Hufflepuff', color: '#46420c', bg: '#e6de7a' },
  { name: 'Ravenclaw', color: '#050546', bg: '#c0def7' },
];

const REFRESH_LIST_TIMEOUT = 0.1; //min
const REFRESH_LIST_BUTTON_LOCK_TIMEOUT = 10; //sec

const HouseButton = ({ getHouse, getCharacters }) => {
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [clickTime, setClickTime] = useState(null);
  const [timeFromClick, setTimeFromClick] = useState(REFRESH_LIST_BUTTON_LOCK_TIMEOUT);

  const handleButtonClick = house => {
    getHouse(house);

    const currentTime = new Date().getTime();
    setClickTime(currentTime);
    setLastRefresh(currentTime);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const lastTime = new Date(lastRefresh).getTime();
      const currentTime = new Date().getTime();
      const diff = (currentTime - lastTime) / 1000;

      //   console.log(diff);

      if (diff > REFRESH_LIST_TIMEOUT * 60) {
        clearInterval(timer);
        getCharacters();
        setLastRefresh(new Date());
      }

      if (clickTime) setTimeFromClick((currentTime - clickTime) / 1000);
      console.log((currentTime - clickTime) / 1000);
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [lastRefresh]);

  return (
    <div>
      {buttonsData.map(button => (
        <Button
          key={button.name}
          color={button.color}
          bg={button.bg}
          onClick={() => handleButtonClick(button.name)}
          disabled={timeFromClick < REFRESH_LIST_BUTTON_LOCK_TIMEOUT}
        >
          {button.name}
          {timeFromClick < REFRESH_LIST_BUTTON_LOCK_TIMEOUT &&
            `(${Math.floor(REFRESH_LIST_BUTTON_LOCK_TIMEOUT - timeFromClick)})`}
        </Button>
      ))}
      <Text>
        Ostatnie pobranie: {lastRefresh && format(new Date(lastRefresh), 'yyyy-MM-dd HH:mm:ss')}
      </Text>
    </div>
  );
};

export default HouseButton;
