import background from '../assets/images/background-img.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/@shared/Button';
import soft from '../assets/images/softarrow.png';
import logo from '../assets/images/logo.svg';
import icon from '../assets/images/input-img.png';
import axios from 'axios';
import showToast from '../components/@shared/Toast';
import UserInfoBox from '../components/feed/home/UserInfoBox';

// 수정함!

function Home() {
  // State variables
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [name, setName] = useState('');

  // Handlers
  const handleFocus = () => {
    setIsIconVisible(false);
    showToast('이름을 입력해주세요!', { style: { background: '#333', color: '#fff' } });
  };
  const handleInputChange = event => setName(event.target.value);

  const navigate = useNavigate();

  const handleAxiosRequest = () => {
    const request = { name, team: '8-4' };
    axios
      .post('https://openmind-api.vercel.app/8-4/subjects/', request)
      .then(response => {
        console.log('handleAxiosRequest', response);
        const userInfoResponse = {
          id: response.data.id,
          imageSource: response.data.imageSource,
          name: response.data.name,
        };
        const userInfo = JSON.stringify(userInfoResponse);
        localStorage.setItem('userInfo', userInfo);
        navigate(`/post/${response.data.id}/answer`);
      })
      .catch(error => console.log('request error', error));
  };

  // 이미 localStorage에 생성된 user의 정보가 있는 경우 메인의 중앙에 이미 있는 프로필 정보 띄우기
  const userInfoString = window.localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userInfoString);

  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="로고" />
      <StyledForm>
        {userInfo ? (
          <UserInfoBox userInfo={userInfo} />
        ) : (
          <StyledInputContainer>
            {isIconVisible && <StyledIcon src={icon} alt="아이콘" />}
            <StyledInput
              id="userName"
              name="userName"
              type="text"
              placeholder="이름을 입력하세요"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            <StyledSubmitBtnContainer>
              <Button onClick={handleAxiosRequest} type="submit" width="100%" $btnColor="deep" disabled={!name.trim()}>
                질문 받기
              </Button>
            </StyledSubmitBtnContainer>
          </StyledInputContainer>
        )}
      </StyledForm>
      <StyledBtnContainer>
        <Button
          type="submit"
          width="180px"
          height="43px"
          imgSrc={soft}
          pagePath="/list"
          style={{ border: '1.5px solid', borderColor: 'var(--brown40)' }}>
          질문하러 가기
        </Button>
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
  right: 40px;
  padding: 1rem;
  width: 100%;
  z-index: 20;
  box-sizing: border-box;
  @media (min-width: 375px) and (max-width: 767px) {
    top: calc(120px + 100px);
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    justify-content: center;
    align-items: center;
  }
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
  background-color: var(--bgColor);
  background-blend-mode: multiply;
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
  @media (min-width: 375px) and (max-width: 767px) {
    width: 310px;
    height: 130px;
    top: 160px;
  }
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
  position: relative;
  width: 336px;
  padding: 10px;
  left: -9px;
`;
