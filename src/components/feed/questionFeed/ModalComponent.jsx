import Modal from 'react-modal';
import { useState } from 'react';
import styled from 'styled-components';
import messageIcon from '../../../assets/images/message-icon.png';
import Profile from '../../../assets/images/samples/profile-sample.png';
import SendQuestionBtn from '../../@shared/Button';

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
  margin: 12px 15px;
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
`;

function ModalComponent({ name }) {
  Modal.setAppElement('#root');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>모달 열기</button>

      <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <StyledModalHeader>
          <StyledModalTitleWrapper>
            <StyledModalIcon src={messageIcon} alt="말풍선" />
            <StyledModalTitle>질문을 작성하세요!</StyledModalTitle>
          </StyledModalTitleWrapper>
          <StyledCloseBtn onClick={closeModal}>X</StyledCloseBtn>
        </StyledModalHeader>
        <StyledModalContent>
          <StyledUserInfo>
            To.
            <StyledProfileImg src={Profile} />
            <StyledUserName>{name}</StyledUserName>
          </StyledUserInfo>
          <StyledTextArea placeholder="질문을 입력해주세요!"></StyledTextArea>
        </StyledModalContent>
        <SendQuestionBtn
          type="submit"
          pagePath="/post/123"
          disabled={false}
          width="558px"
          height="50px"
          style={{ backgroundColor: 'var(--brown20)', color: 'var(--gray40)' }}>
          질문 보내기
        </SendQuestionBtn>
      </StyledModal>
    </div>
  );
}

export default ModalComponent;
