import styled from 'styled-components';
import moreIcon from '../../../assets/images/more-icon.png';

function MoreButton({ onEditButtonClick, onRejectButtonToggle }) {
  return (
    <StyledMoreButton style={{ position: 'relative' }}>
      <img src={moreIcon} alt={'더보기 아이콘'} />
      <ul style={{ width: '60px', position: 'absolute', backgroundColor: 'aliceblue' }}>
        <li onClick={onEditButtonClick}>답변 수정</li>
        <li onClick={onRejectButtonToggle}>답변 거절</li>
      </ul>
    </StyledMoreButton>
  );
}

export default MoreButton;

const StyledMoreButton = styled.button`
  & img {
    height: 26px;
    width: 26px;
  }
`;
