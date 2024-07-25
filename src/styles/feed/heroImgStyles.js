import styled from 'styled-components';

export const StyledHeroImg = styled.img`
  width: 100%;
  height: 234px;
  object-fit: cover;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    height: 177px;
  }
`;
