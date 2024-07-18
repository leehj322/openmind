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

function PageNavigator({ currentPage, pageNumList, onNavBtnClick, arrowBtnVisible }) {
  // if (arrowBtnVisible === 'both') {
  // } else if (arrowBtnVisible === 'left') {
  // } else if (arrowBtnVisible === 'right') {
  // } else if (arrowBtnVisible === 'none') {
  // } else {
  //   console.log('arrowBtnVisible 값에 올바른 값을 입력하세요');
  // }
  return (
    <StyledPageNavigatorArea>
      <NavArrowBtn onNavBtnClick={onNavBtnClick}>&lt;</NavArrowBtn>
      {pageNumList.map(pageNum => (
        <NavNumBtn key={pageNum} onNavBtnClick={onNavBtnClick} isCurrentPage={pageNum === currentPage}>
          {pageNum}
        </NavNumBtn>
      ))}
      <NavArrowBtn onNavBtnClick={onNavBtnClick}>&gt;</NavArrowBtn>
    </StyledPageNavigatorArea>
  );
}

export default PageNavigator;
