import styled from 'styled-components';
import filter from '../../styles/@shared/filter';

const StyledDropdownListContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? `inline-flex` : `none`)};
  flex-direction: column;
  position: absolute;

  min-width: ${({ minWidth }) => minWidth};

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

  color: ${props => (props['data-current'] ? 'var(--blue)' : 'var(--gray50)')};
  font-size: 14px; // fontSize(xsmall)
  font-weight: 500; // fontWeight(medium)

  height: 30px;
  cursor: pointer;

  // font 및 img color값 hover시에 gray60, 현재 활성화된 값일시 blue
  // hover시에 child element인 img 까지 hover 전달
  &:hover {
    color: ${props => (props['data-current'] ? 'var(--blue)' : 'var(--gray60)')};
    background-color: var(--gray20);
    & img {
      filter: ${props => (props['data-current'] ? filter.blue : filter.gray60)};
    }
  }

  // img color값 gray50, 현재 활성화된 값일시 blue
  & img {
    filter: ${props => (props['data-current'] ? filter.blue : filter.gray50)};
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
 * @param {string} minWidth : min-width (ex. "80px")
 * @param {object} itemList : {itemNameList: array(), itemImgList: array()}, itemImgList가 []인 경우 이미지 X
 * @param {string} currentItem : itemNameList의 요소와 같은 값 입력, 현재 활성화된 값임을 파란색으로 표시 (ex. itemNameList: ['수정', '최신순'] 에서 '최신순'을 넘겨줄 시 최신순이 파란색으로 활성화)
 */
function DropdownBox({ isDropdownVisible, minWidth, itemList, currentItem }) {
  const { itemNameList, itemImgList } = itemList;

  return (
    <StyledDropdownListContainer isVisible={isDropdownVisible} minWidth={minWidth}>
      {itemImgList.length === 0
        ? itemNameList.map(itemName => {
            return <StyledItemArea data-current={currentItem === itemName}>{itemName}</StyledItemArea>;
          })
        : itemNameList.map((itemName, index) => {
            return (
              <StyledItemArea data-current={currentItem === itemName}>
                <ItemImg src={itemImgList[index]} />
                {itemName}
              </StyledItemArea>
            );
          })}
    </StyledDropdownListContainer>
  );
}

export default DropdownBox;
