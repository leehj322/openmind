import styled from 'styled-components';

const StyledPageNavigatorArea = styled.div`
  display: flex;
  margin: 45px auto 0;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin: 60px auto 0;
  }
`;

const StyledPageNavigatorWrapper = styled.div`
  color: var(--gray40);
  font-size: 20px;
  font-weight: 400;
  width: 40px;
  height: 40px;
`;

function PageNavigator() {
  return (
    <StyledPageNavigatorArea>
      <StyledPageNavigatorWrapper>&lt;</StyledPageNavigatorWrapper>
      <StyledPageNavigatorWrapper>&gt;</StyledPageNavigatorWrapper>
    </StyledPageNavigatorArea>
  );
}

export default PageNavigator;
