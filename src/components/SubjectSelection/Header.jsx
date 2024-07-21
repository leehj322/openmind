import styled from 'styled-components';
import LightBrownButton from '../@shared/LightBrownButton';
import LogoImgUrl from '../../assets/images/logo.svg';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';

const StyledHeaderArea = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${MEDIA_QUERY_SIZES.tablet} {
    padding: 0 50px;
  }

  @media ${MEDIA_QUERY_SIZES.mobile} {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledLogoImg = styled.img`
  display: block;
  width: 146px;
  height: 57px;
`;

function Header() {
  return (
    <StyledHeaderArea>
      <StyledLogoImg src={LogoImgUrl} />
      <LightBrownButton>답변하러 가기</LightBrownButton>
    </StyledHeaderArea>
  );
}

export default Header;
