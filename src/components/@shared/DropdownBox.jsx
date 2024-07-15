import styled from 'styled-components';
import filter from '../../styles/@shared/filter';

const StyledDropdownListContainer = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? `inline-flex` : `none`)};
  flex-direction: column;
  position: absolute;

  min-width: ${({ $minWidth }) => $minWidth}px;

  background-color: var(--gray10);
  border: 1px solid var(--gray30);
  border-radius: 8px;
  padding: 4px 0;
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
 * @param {number} minWidth : min-width (ex. 80)
 * @param {object} itemList : [{title: '수정순', url: imgUrl}, {title: '최신순', img: imgUrl} ...]
 * @param {string} currentItem : itemNameList의 요소와 같은 값 입력, 현재 활성화된 값임을 파란색으로 표시 (ex. itemNameList: ['수정', '최신순'] 에서 '최신순'을 넘겨줄 시 최신순이 파란색으로 활성화)
 */
function DropdownBox({ isDropdownVisible, minWidth, itemList, currentItem }) {
  return (
    <StyledDropdownListContainer $isVisible={isDropdownVisible} $minWidth={minWidth}>
      {itemList.map(item => {
        return (
          <StyledItemArea key={item.title} $isCurrent={currentItem === item.title}>
            {item.url && <ItemImg src={item.url} />}
            {item.title}
          </StyledItemArea>
        );
      })}
    </StyledDropdownListContainer>
  );
}

export default DropdownBox;
