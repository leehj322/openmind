import background from '../assets/images/background-img.png';
import theme from '../styles/@shared/theme';
import { useState } from 'react';
import styled from 'styled-components';
import SendQuestionBtn from '../components/@shared/Button';
import soft from '../assets/images/softarrow.png';
import logo from '../assets/images/logo.svg';
import icon from '../assets/images/input-img.png';

function Home() {
  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="로고" />
      <StyledForm>
        <StyledInputContainer>
          <StyledIcon src={icon} alt="아이콘" />
          <StyledInput type="text" placeholder="이름을 입력하세요"></StyledInput>
        </StyledInputContainer>
      </StyledForm>
      <StyledBtnContainer>
        <SendQuestionBtn
          type="submit"
          width="180px"
          height="43px"
          imgSrc={soft}
          style={{ border: '1.5px solid', borderColor: 'var(--brown40)' }}>
          질문하러 가기
        </SendQuestionBtn>
      </StyledBtnContainer>
      <StyledBgContainer />
    </StyledContainer>
  );
}

export default Home;

const StyledContainer = styled.div`
  background-color: var(--gray20);
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 50px;
  padding: 1rem;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
`;

const StyledBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 3.5rem;
  margin: 0;
  position: fixed;
  overflow: hidden;

  background-color: var(--gray20);
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  box-sizing: border-box;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  z-index: 10;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 364px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 152px;
  border-radius: 16px;
  gap: 10px;
  padding: 32px;
  z-index: 20;

  background-color: var(--gray10);
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 16px;
  margin-bottom: 20px;
  border: 1px solid var(--gray40);
  border-radius: 5px;
  box-sizing: border-box;

  &::placeholder {
    padding-left: 12px;
  }
`;

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 8px;
  position: absolute;
  top: 1.5px;
  left: 5.5px;
`;

const StyledSubmitBtnContainer = styled.div`
  width: 100%;
  padding: 10px;
`;
