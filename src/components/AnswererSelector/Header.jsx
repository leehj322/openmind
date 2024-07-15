import styled from 'styled-components';
import LightBrownButton from '../@shared/LightBrownButton';
import LogoImgUrl from '../../assets/images/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  display: block;
  width: 146px;
  height: 57px;
`;

function Header() {
  return (
    <StyledHeader>
      <LogoImg src={LogoImgUrl} />
      <LightBrownButton>답변하러 가기</LightBrownButton>
    </StyledHeader>
  );
}

export default Header;
