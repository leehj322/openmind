<<<<<<< HEAD
import styled from 'styled-components';
import Button from '../components/@shared/Button';
//import LightArrow from '../assets/images/lightarrow.png';
import DarkArrow from '../assets/images/darkarrow.png';
import React, { useState } from 'react';

const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 40%;
`;

function Home() {
  const [inputValue, setInputValue] = useState('');

  const isButtonDisabled = () => {
    return inputValue.trim() === 'ㄹㄹ';
  };
  return (
    <ButtonContainer>
      {/*화살표 필요 없는 경우 imgSrc 부분 지우고 사용하시면 돼요!  
      / shape은 네모일 땐 square, 알약일 땐 pill로 통일시키면 좋을 거 같아요
      / btnColor도 dark일 땐 dark, light일 땐 light로 해주세요! */}
      <Button
        type="button"
        pagePath="/post/123"
        disabled={isButtonDisabled()}
        shape="pill"
        btnColor="dark"
        imgSrc={DarkArrow}
        style={{ width: '500px', height: '50px' }}>
        질문하러 가기
      </Button>
    </ButtonContainer>
  );
=======
function Home() {
  return <div>Home page</div>;
>>>>>>> origin/dev
}

export default Home;
