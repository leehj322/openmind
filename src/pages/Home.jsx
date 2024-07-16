import styled from 'styled-components';
import Button from '../components/@shared/Button';
import LightArrow from '../assets/images/lightarrow.png';
import DarkArrow from '../assets/images/darkarrow.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightBrownButton, DarkBrownButton } from '../components/@shared/ButtonStyles';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  const [inputValue, setInputValue] = useState('');

  const isButtonDisabled = () => {
    return inputValue.trim() === 'ff';
  };

  return (
    <ButtonContainer>
      <Button to="/post/123" disabled={isButtonDisabled()} shape="square" theme="dark" imgSrc={DarkArrow}>
        질문하러 가기
      </Button>
    </ButtonContainer>
  );
}

export default Home;
