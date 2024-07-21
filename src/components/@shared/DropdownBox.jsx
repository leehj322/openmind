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

  ${({ $triggerCloseAnimation, $isAnimationEnabled }) =>
    $isAnimationEnabled ? ($triggerCloseAnimation ? dropdownSlideDownAnimation : dropdownSlideUpAnimation) : ''};
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
  const [isVisible, setIsVisible] = useState(false);

  const handleItemClick = event => {
    const { value } = event.currentTarget.dataset;
    if (isCurrentStateHighlight) {
      setCurrentItem(value);
    }
    onItemClick(value);
  };

  // 닫히는 애니메이션 적용
  // isDropdownVisible : 외부에서 끌지 켤지 입력값을 받아옴
  // isVisible : 실제로 box가 꺼지고 켜지는 것을 제어
  // isDropdownVisible로 false 값을 받았을 때, isVisible이 animation 시간만큼 기다린 후에 false가 되도록 해주어야함.
  // isDropdownVisible로 true 값을 받았을 때, isVisible이 바로 true가 되어야함.
  useEffect(() => {
    let timer;
    if (isDropdownVisible) {
      setIsVisible(isDropdownVisible);
    } else {
      timer = setTimeout(() => {
        setIsVisible(isDropdownVisible);
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [isDropdownVisible]);

  return (
    <StyledDropdownListContainer
      $isVisible={isVisible}
      $triggerCloseAnimation={isDropdownVisible}
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
