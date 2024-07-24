import styled from 'styled-components';
import Button from '../../@shared/Button';

const StyledUserInfoBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledUserInfoArea = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
  display: flex;
  gap: 12px;
  justify-content: space-around;
  align-items: center;
`;

const StyledPfpArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledPfpImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StyledName = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledButtonWrapper = styled.div`
  & button {
    width: 100%;
    height: 40px;
  }
`;

function UserInfoBox({ userInfo }) {
  const { id, imageSource, name } = userInfo;

  const buttonPath = `/post/${id}/answer`;

  return (
    <StyledUserInfoBoxContainer>
      <StyledUserInfoArea>
        <StyledPfpArea>
          <StyledName>프로필: </StyledName>
          <StyledPfpImg src={imageSource} />
        </StyledPfpArea>
        <StyledName>이름: {name}</StyledName>
      </StyledUserInfoArea>
      <StyledButtonWrapper>
        <Button $btnColor={'deep'} pagePath={buttonPath}>
          질문 받기
        </Button>
      </StyledButtonWrapper>
    </StyledUserInfoBoxContainer>
  );
}

export default UserInfoBox;
