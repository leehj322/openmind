import styled from 'styled-components';
import Button from '../components/@shared/Button';
import SoftArrow from '../assets/images/softarrow.png';
import DeepArrow from '../assets/images/deeparrow.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import showToast from '../components/@shared/Toast';

const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    //페이지 이동
    navigate('/post/123'); // 실제 이동할 경로로 대체하세요.

    //토스트 메시지 표시
    showToast('버튼 클릭 완료!'); // 원하는 메시지로 대체하세요.
  };

  return (
    <ButtonContainer>
      <Button pagePath={handleButtonClick} width="504px" height="100px" imgSrc={SoftArrow}>
        질문하러 가기
      </Button>
    </ButtonContainer>
  );
}

export default Home;
