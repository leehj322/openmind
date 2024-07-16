import styled from 'styled-components';
import moreIcon from '../../assets/images/more-icon.png';

function MoreButton() {
  return (
    <StyledMoreButton>
      <img src={moreIcon} alt={'더보기 아이콘'} />
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
