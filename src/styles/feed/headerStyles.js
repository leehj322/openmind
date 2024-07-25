import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  margin-top: 50px;

  position: absolute;
  top: 0px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin-top: 40px;
  }
`;
