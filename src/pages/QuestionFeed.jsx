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
`;

function QuestionFeed() {
  const [inputValue, setInputValue] = useState('');

  const isButtonDisabled = () => {
    return inputValue.trim() === 'ff';
  };

  return (
    <ButtonContainer>
      {/* shape 설정 시 네모버튼 : square / 알약버튼 : pill로 통일화하면 좋을 거 같아요! */}
      <Button to="/post/123/answer" disabled={isButtonDisabled()} shape="pill" theme="light" imgSrc={LightArrow}>
        질문하러 가기
      </Button>
    </ButtonContainer>
  );
}

export default QuestionFeed;
