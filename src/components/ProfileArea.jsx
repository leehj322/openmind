import styled from 'styled-components';
import copyClipboardIcon from '../assets/images/copy_clipboard_icon.png';
import kakaoShareIcon from '../assets/images/kakao_icon.png';
import facebookShareIcon from '../assets/images/facebook_icon.png';
import sampleImg from '../assets/images/samples/profile-sample.png';

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledProfileImg = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  margin: 12px 15px;
  @media (max-width: 767px) {
    width: 104px;
    height: 104px;
  }
`;

const StyledUserNameWrapper = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-bottom: 12px;
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const StyledIconArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const StyledShareIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function ProfileArea() {
  return (
    <StyledProfileContainer>
      <StyledProfileImg src={sampleImg} alt="프로필 이미지" />
      <StyledUserNameWrapper>이름</StyledUserNameWrapper>
      <StyledIconArea>
        <StyledShareIcon src={copyClipboardIcon} alt="클립보드 복사 아이콘" />
        <StyledShareIcon src={kakaoShareIcon} alt="카카오톡 공유 아이콘" />
        <StyledShareIcon src={facebookShareIcon} alt="페이스북 공유 아이콘" />
      </StyledIconArea>
    </StyledProfileContainer>
  );
}

export default ProfileArea;
