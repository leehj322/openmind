import styled from 'styled-components';
import LogoImgUrl from '../../assets/images/logo.svg';
import Button from '../@shared/Button';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';
import { Link } from 'react-router-dom';
import rightArrowImg from '../../assets/images/softarrow.png';

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

const StyledButtonWrapper = styled.div`
  & button {
    border: 1px solid ${({ theme }) => theme.brown40};
    padding: 0;

    @media ${MEDIA_QUERY_SIZES.mobile} {
      width: 127px;
      height: 34px;
      font-size: 14px;
      gap: 4px;
      padding: 8px 12px;
    }
  }
`;

function Header() {
  const userInfoString = window.localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userInfoString);
  const buttonNextPath = userInfo ? `/post/${userInfo.id}/answer` : '/';

  return (
    <StyledHeaderArea>
      <Link to="/">
        <StyledLogoImg src={LogoImgUrl} />
      </Link>
      <StyledButtonWrapper>
        <Button imgSrc={rightArrowImg} pagePath={buttonNextPath}>
          답변하러 가기
        </Button>
      </StyledButtonWrapper>
    </StyledHeaderArea>
  );
}

export default Header;
