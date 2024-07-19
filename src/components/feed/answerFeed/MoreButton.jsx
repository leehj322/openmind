import styled from 'styled-components';
import moreIcon from '../../../assets/images/more-icon.png';

/**
 * 답변하기 피드 카드에서 더보기 메뉴 버튼을 누르면 드롭다운이 나오는데, 드롭다운에서 답변 수정, 답변 거절 기능이 가능
 * @param {Function} onEditButtonClick
 * @param {Function} onRejectButtonClick
 * @returns
 */
function MoreButton({ onEditButtonClick, onRejectButtonClick }) {
  return (
    <StyledMoreButton style={{ position: 'relative' }}>
      <img src={moreIcon} alt={'더보기 아이콘'} />
      <ul style={{ width: '60px', position: 'absolute', backgroundColor: 'aliceblue' }}>
        <li onClick={onEditButtonClick}>답변 수정</li>
        <li onClick={onRejectButtonClick}>답변 거절</li>
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
