import styled from 'styled-components';
import filter from '../../styles/@shared/filter';
import { useState } from 'react';

const StyledDropdownListContainer = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? `inline-flex` : `none`)};
  flex-direction: column;
  position: absolute;
  top: calc(100% + ${({ $top }) => $top}px);
  left: ${({ $left }) => $left}px;

  min-width: ${({ $minWidth }) => $minWidth}px;

  background-color: var(--gray10);
  border: 1px solid var(--gray30);
  border-radius: 8px;
  padding: 4px 0;

  box-shadow: var(--shadow1pt);
`;

const StyledItemArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  color: ${({ $isCurrent }) => ($isCurrent ? 'var(--blue)' : 'var(--gray50)')};
  font-size: 14px; // fontSize(xsmall)
  font-weight: 500; // fontWeight(medium)

  height: 30px;
  cursor: pointer;

  // font 및 img color값 hover시에 gray60, 현재 활성화된 값일시 blue
  // hover시에 child element인 img 까지 hover 전달
  &:hover {
    color: ${({ $isCurrent }) => ($isCurrent ? 'var(--blue)' : 'var(--gray60)')};
    background-color: var(--gray20);
    & img {
      filter: ${({ $isCurrent }) => ($isCurrent ? filter.blue : filter.gray60)};
    }
  }

  // img color값 gray50, 현재 활성화된 값일시 blue
  & img {
    filter: ${({ $isCurrent }) => ($isCurrent ? filter.blue : filter.gray50)};
  }
`;

const ItemImg = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`;

/**
 * dropdown trigger를 통해서 isDropdownVisible을 toggle시에 꺼졌다 켜졌다 하는 dropdown list box
 * @param {boolean} isDropdownVisible : dropdown box 끄기(false), 켜기(true)
 * @param {number} minWidth : min-width px값 (ex. 80)
 * @param {number} topPosition : top position px값 (ex. 5) / 기본값 100%
 * @param {number} leftPosition : left position px값 (ex. 5) / 기본값 0px
 * @param {object} itemList : [{title: '이름순', value: 'name' url: imgUrl}, {title: '최신순', value: 'recent', img: imgUrl} ...]
 * @param {function} onItemClick : 해당 item을 click 했을때 value값을 파라미터로 하는 onItemClick함수 실행
 */
function DropdownBox({
  isDropdownVisible,
  isCurrentStateHighlight = true,
  minWidth,
  topPosition = 0,
  leftPosition = 0,
  itemList,
  onItemClick,
}) {
  const [currentItem, setCurrentItem] = useState(null);

  const handleItemClick = event => {
    const { value } = event.currentTarget.dataset;
    if (isCurrentStateHighlight) {
      setCurrentItem(value);
    }
    onItemClick(value);
  };

  return (
    <StyledDropdownListContainer
      $isVisible={isDropdownVisible}
      $minWidth={minWidth}
      $top={topPosition}
      $left={leftPosition}>
      {itemList.map(item => {
        const { title, value, url } = item;
        return (
          <StyledItemArea data-value={value} key={value} $isCurrent={currentItem === value} onClick={handleItemClick}>
            {url && <ItemImg src={url} alt="드롭다운 버튼 이미지" />}
            {title}
          </StyledItemArea>
        );
      })}
    </StyledDropdownListContainer>
  );
}

export default DropdownBox;
