import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect } from 'react';

const slideDown = keyframes`
  0% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-30%);
    opacity: 0;
  }
`;

const dropdownSlideDownAnimation = css`
  animation: ${slideDown} 0.2s ease;
`;

const dropdownSlideUpAnimation = css`
  animation: ${slideUp} 0.2s ease;
`;

const StyledDropdownListContainer = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? `inline-flex` : `none`)};
  flex-direction: column;
  position: absolute;
  top: calc(100% + ${({ $top }) => $top}px);
  left: ${({ $left }) => $left}px;

  min-width: ${({ $minWidth }) => $minWidth}px;

  background-color: ${({ theme }) => theme.gray10};
  border: 1px solid ${({ theme }) => theme.gray30};
  border-radius: 8px;
  padding: 4px 0;

  box-shadow: var(--shadow1pt);

  ${({ $isCloseToggle, $isAnimationEnabled }) =>
    $isAnimationEnabled ? ($isCloseToggle ? dropdownSlideDownAnimation : dropdownSlideUpAnimation) : ''};
`;

const StyledItemArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.blue : theme.gray50)};
  font-size: 14px;
  font-weight: 500;

  height: 30px;
  cursor: pointer;

  // font 및 img color값 hover시에 gray60, 현재 활성화된 값일시 blue
  // hover시에 child element인 img 까지 hover 전달
  &:hover {
    color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.blue : theme.gray60)};
    background-color: ${({ theme }) => theme.gray20};
    & img {
      filter: ${({ theme, $isCurrent }) => ($isCurrent ? theme.blueFilter : theme.gray60Filter)};
    }
  }

  &:active {
    color: ${({ theme }) => theme.blue};
    & img {
      filter: ${({ theme }) => theme.blueFilter};
    }
  }

  // img color값 gray50, 현재 활성화된 값일시 blue
  & img {
    filter: ${({ theme, $isCurrent }) => ($isCurrent ? theme.blueFilter : theme.gray50Filter)};
  }
`;

const StyledItemImg = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`;

/**
 * dropdown trigger를 통해서 isDropdownVisible을 toggle시에 꺼졌다 켜졌다 하는 dropdown list box
 * 사용시에 dropdown toggler 안에 배치시키고 사용해야 합니다 (position: absolute)
 * @param {boolean} isDropdownVisible dropdown box 끄기(false), 켜기(true)
 * @param {boolean} isCurrentStateHighlight 현재 값 파란색으로 하이라이트 / 기본값 true
 * @param {boolean} isAnimationEnabled 애니메이션 활성화 할지(true) 안할지(false) 결정 / 기본값 true
 * @param {number} minWidth min-width px값 (ex. 80)
 * @param {number} topPosition top position px값 (ex. 5) / 기본값 100%
 * @param {number} leftPosition left position px값 (ex. 5) / 기본값 0px
 * @param {object} itemList map 돌릴 값 / ex. [{title: '이름순', value: 'name' url: imgUrl}, {title: '최신순', value: 'recent', img: imgUrl} ...]
 * @param {function} onItemClick 해당 item을 click 했을때 실행할 value값을 파라미터로 하는 함수
 */
function DropdownBox({
  isDropdownVisible,
  isCurrentStateHighlight = true,
  isAnimationEnabled = true,
  minWidth,
  topPosition = 0,
  leftPosition = 0,
  itemList,
  onItemClick,
}) {
  const [currentItem, setCurrentItem] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  const handleItemClick = event => {
    const { value } = event.currentTarget.dataset;
    if (isCurrentStateHighlight) {
      setCurrentItem(value);
    }
    onItemClick(value);
  };

  // close 입력 들어왔을 경우 animation 200ms 기다렸다가 닫음
  useEffect(() => {
    const prevIsVisibleState = isVisible;
    if (prevIsVisibleState === true) {
      // 드롭다운 박스 껏을 때, 200ms 기다리고 안보이게 함
      setTimeout(() => {
        setIsVisible(isDropdownVisible);
      }, 200);
    } else {
      // 해당 코드는 타이머에 설정된 시간 내에 사용자가 켜기->끄기->켜기를 실행하는 경우
      // 켜기 상태가 되었음에도 타이머가 뒤늦게 끝나면서 드롭다운이 보이지 않는 경우를 방지하는 코드임
      // clearTimeout 하는 경우 콜백을 실행하지 않기 때문에 해당 버그가 발생함
      if (isVisible === true) {
        setIsVisible(false);
      }
      // 드롭다운 박스 켰을 때는 기다리지 않아도 괜찮음
      setIsVisible(isDropdownVisible);
    }
    return () => clearTimeout();
  }, [isDropdownVisible]);

  return (
    <StyledDropdownListContainer
      $isVisible={isVisible}
      $isCloseToggle={isDropdownVisible}
      $isAnimationEnabled={isAnimationEnabled}
      $minWidth={minWidth}
      $top={topPosition}
      $left={leftPosition}>
      {itemList.map(item => {
        const { title, value, url } = item;
        return (
          <StyledItemArea data-value={value} key={value} $isCurrent={currentItem === value} onClick={handleItemClick}>
            {url && <StyledItemImg src={url} alt={value} />}
            {title}
          </StyledItemArea>
        );
      })}
    </StyledDropdownListContainer>
  );
}

export default DropdownBox;
