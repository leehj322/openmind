import styled from 'styled-components';
import TwitterShareButton from './TwitterShareButton';
import KakaoShareButton from './KakaoShareButton';
import ClipboardCopyButton from './ClipboardCopyButton';

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
  margin-bottom: 12px;
  border-radius: 50%;
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
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

/* 테스트용으로 남겨둡니다
const subject = {
  id: 2,
  name: '강영훈',
  imageSource: 'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
  questionCount: 5,
  createdAt: '2023-10-23T05:08:05.825279Z',
};
*/

function ProfileArea({ subject }) {
  return (
    <div>
      <>
        <StyledProfileContainer>
          <StyledProfileImg src={subject.imageSource} alt="프로필 이미지" />
          <StyledUserNameWrapper>{subject.name}</StyledUserNameWrapper>
          <StyledIconArea>
            <ClipboardCopyButton subject={subject} />
            <KakaoShareButton subject={subject} />
            <TwitterShareButton subject={subject} />
          </StyledIconArea>
        </StyledProfileContainer>
      </>
    </div>
  );
}

export default ProfileArea;
