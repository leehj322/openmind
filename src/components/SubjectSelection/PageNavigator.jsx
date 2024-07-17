import styled from 'styled-components';

const StyledPageNavigatorArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px auto 0;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin: 60px auto 0;
  }
`;

const StyledNavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ $isCurrentPage }) => ($isCurrentPage ? 'var(--brown40)' : 'var(--gray40)')};
  font-size: 20px;
  font-weight: 400;

  width: 40px;
  height: 40px;

  cursor: pointer;
`;

function NavArrowBtn({ children, onNavBtnClick }) {
  return <StyledNavBtn onClick={onNavBtnClick}>{children}</StyledNavBtn>;
}

/**
 * @param {boolean} isCurrentPage 현재 활성화된 페이지인지
 */
function NavNumBtn({ children, isCurrentPage, onNavBtnClick }) {
  return (
    <StyledNavBtn $isCurrentPage={isCurrentPage} onClick={onNavBtnClick}>
      {children}
    </StyledNavBtn>
  );
}

function PageNavigator({ totalSubjectCount, currentPage, onNavBtnClick }) {
  const numList = [1, 2, 3, 4, 5];
  console.log(totalSubjectCount);

  return (
    <StyledPageNavigatorArea>
      <NavArrowBtn onNavBtnClick={onNavBtnClick}>&lt;</NavArrowBtn>
      {numList.map(num => (
        <NavNumBtn key={num} onNavBtnClick={onNavBtnClick} isCurrentPage={num === currentPage}>
          {num}
        </NavNumBtn>
      ))}
      <NavArrowBtn onNavBtnClick={onNavBtnClick}>&gt;</NavArrowBtn>
    </StyledPageNavigatorArea>
  );
}

export default PageNavigator;
