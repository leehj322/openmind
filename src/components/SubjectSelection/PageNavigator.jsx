import { useState, useEffect } from 'react';
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

function NavArrowBtn({ children, onNavBtnClick, isVisible }) {
  return <StyledNavBtn onClick={onNavBtnClick}>{isVisible && children}</StyledNavBtn>;
}

function NavNumBtn({ children, isCurrentPage, onNavBtnClick }) {
  return (
    <StyledNavBtn $isCurrentPage={isCurrentPage} onClick={onNavBtnClick}>
      {children}
    </StyledNavBtn>
  );
}

/**
 * @param {number} currentPage 현재 페이지 상태
 * @param {array} pageNumList 페이지 번호를 담은 리스트 값
 * @param {function} onNavBtnClick 버튼 클릭시 동작을 담은 함수
 * @param {string} arrowBtnVisible 왼쪽, 오른쪽 화살표 보이기 안보이기 옵션 (both: 둘 다 보임, left: 왼쪽 보임, right: 오른쪽 보임, none: 둘다 안보임)
 */
function PageNavigator({ currentPage, pageNumList, onNavBtnClick, arrowBtnVisible }) {
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(true);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  /**
   * @param {boolean} isLeftArrowVisible 왼쪽 화살표 보이기
   * @param {boolean} isRightArrowVisible 오른쪽 화살표 보이기
   */
  const setArrowVisibleOption = (isLeftArrowVisible, isRightArrowVisible) => {
    setIsLeftArrowVisible(isLeftArrowVisible);
    setIsRightArrowVisible(isRightArrowVisible);
  };

  useEffect(() => {
    if (arrowBtnVisible === 'both') {
      setArrowVisibleOption(true, true);
    } else if (arrowBtnVisible === 'left') {
      setArrowVisibleOption(true, false);
    } else if (arrowBtnVisible === 'right') {
      setArrowVisibleOption(false, true);
    } else if (arrowBtnVisible === 'none') {
      setArrowVisibleOption(false, false);
    } else {
      throw new Error('arrowBtnVisible에 올바른 값을 입력하세요.');
    }
  }, [arrowBtnVisible]);

  return (
    <StyledPageNavigatorArea>
      <NavArrowBtn onNavBtnClick={onNavBtnClick} isVisible={isLeftArrowVisible}>
        &lt;
      </NavArrowBtn>
      {pageNumList.map(pageNum => (
        <NavNumBtn key={pageNum} onNavBtnClick={onNavBtnClick} isCurrentPage={pageNum === currentPage}>
          {pageNum}
        </NavNumBtn>
      ))}
      <NavArrowBtn onNavBtnClick={onNavBtnClick} isVisible={isRightArrowVisible}>
        &gt;
      </NavArrowBtn>
    </StyledPageNavigatorArea>
  );
}

export default PageNavigator;
