import styled from 'styled-components';
import rightArrowImgUrl from '../../assets/images/arrow-right.svg';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';

const Button = styled.button`
  background-color: ${({ theme }) => theme.brown10};
  border: 1px solid ${({ theme }) => theme.brown40};
  border-radius: 8px;

  color: ${({ theme }) => theme.brown40};
  font-size: 16px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;

  @media ${MEDIA_QUERY_SIZES.mobile} {
    font-size: 14px;
    gap: 4px;
    padding: 8px 12px;
  }
`;

const ArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;

function LightBrownButton({ children }) {
  return (
    <Button>
      {children}
      <ArrowImg src={rightArrowImgUrl} />
    </Button>
  );
}

export default LightBrownButton;
