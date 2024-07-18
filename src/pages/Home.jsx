import styled from 'styled-components';
import Button from '../components/@shared/Button';
import SoftArrow from '../assets/images/softarrow.png';
import DeepArrow from '../assets/images/deeparrow.png';
import React, { useState } from 'react';

const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home() {
  const [inputValue, setInputValue] = useState('');

  //예시
  const isButtonDisabled = () => {
    return inputValue.trim() === 'ff';
  };

  return (
    <ButtonContainer>
      {/*화살표 필요 없는 경우 imgSrc 부분 지우고 사용하시면 돼요!  
      / shape은 네모일 땐 square, 알약일 땐 pill로 통일시키면 좋을 거 같아요
      / btnColor도 Deep일 땐 deep, Soft일 땐 soft로 해주세요! */}
      <Button
        pagePath="/post/123"
        disabled={isButtonDisabled()}
        imgSrc={SoftArrow}
        style={{
          width: '500px',
          height: '40px',
          //추가 css
        }}>
        질문하러 가기
      </Button>
    </ButtonContainer>
  );
}

export default Home;
