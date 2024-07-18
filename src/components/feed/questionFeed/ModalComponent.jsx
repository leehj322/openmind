import Modal from 'react-modal';
import { useState } from 'react';
import styled from 'styled-components';
import messageIcon from '../../../assets/images/message-icon.png';
import SendQuestionBtn from '../../@shared/Button';
import theme from '../../../styles/@shared/theme';

/**
 * @param {object} props
 * @param {string} props.profileImg - 사용자 프로필 이미지
 * @param {string} props.name - 사용자 이름
 * @param {boolean} props.isOpen - 모달 창 열림 상태
 * @param {function} props.onRequestClose - 모달 창 닫기 요청 함수
 */

function ModalComponent({ profileImg, name, isOpen, onRequestClose }) {
  Modal.setAppElement('#root');

  return (
    <div>
      {/* 모달 창 */}
      <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
        {/* 모달 창 - header */}
        <StyledModalHeader>
          <StyledModalTitleWrapper>
            <StyledModalIcon src={messageIcon} alt="말풍선" />
            <StyledModalTitle>질문을 작성하세요!</StyledModalTitle>
          </StyledModalTitleWrapper>
          <StyledCloseBtn onClick={onRequestClose}>X</StyledCloseBtn>
        </StyledModalHeader>

        {/* 모달 창 - main */}
        <StyledModalContent>
          <StyledUserInfo>
            To.
            <StyledProfileImg src={profileImg} />
            <StyledUserName>{name}</StyledUserName>
          </StyledUserInfo>
          <StyledTextArea placeholder="질문을 입력해주세요!"></StyledTextArea>
        </StyledModalContent>

        {/* 모달 창 버튼 */}
        <StyledBtnContainer>
          <SendQuestionBtn
            type="submit"
            pagePath="/post/123"
            width="100%"
            height="100%"
            disabled={false}
            style={{ backgroundColor: 'var(--brown20)', color: 'var(--gray40)' }}>
            질문 보내기
          </SendQuestionBtn>
        </StyledBtnContainer>
      </StyledModal>
    </div>
  );
}

export default ModalComponent;

const StyledModal = styled(Modal)`
  width: 612px;
  height: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--gray10);
  border-radius: 24px;
  box-shadow: var(--shadow3pt);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.windowSize.mobile} {
    width: 90%;
    height: 80%;
    max-width: 300px;
    max-height: 600px;
  }
`;

const StyledModalHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 0.5px solid var(--gray30);
  height: 50px;
`;

const StyledModalTitleWrapper = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledModalTitle = styled.h2`
  font-size: 18px;
`;

const StyledModalIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledCloseBtn = styled.button`
  font-size: 28px;
  cursor: pointer;
  color: #f5a9a9;
  font-weight: 400;
  margin-right: 15px;
`;

const StyledModalContent = styled.main`
  margin: 15px 15px;
  @media ${({ theme }) => theme.windowSize.mobile} {
    margin: 10px 15px;
  }
`;

const StyledUserInfo = styled.div`
  padding-left: 5px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 23px;
`;

const StyledProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const StyledUserName = styled.h2`
  margin-left: 5px;
  font-size: 20px;
`;

const StyledTextArea = styled.textarea`
  margin-top: 15px;
  width: 558px;
  height: 220px;
  background-color: var(--brown10);
  border-radius: 8px;
  padding: 16px;
  @media ${({ theme }) => theme.windowSize.mobile} {
    width: 279px;
    height: 338px;
  }
`;

const StyledBtnContainer = styled.div`
  width: 558px;
  height: 50px;
  @media ${({ theme }) => theme.windowSize.mobile} {
    margin-top: 0;
    width: 279px;
    height: 40px;
  }
`;
