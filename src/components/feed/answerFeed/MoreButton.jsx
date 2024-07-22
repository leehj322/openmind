import styled from 'styled-components';
import moreIcon from '../../../assets/images/more-icon.png';
import useToggle from '../../../hooks/useToggle';
import DropdownBox from '../../@shared/DropdownBox';
<<<<<<< HEAD

const DROPDOWN_ITEM_LIST = [
  { title: '답변 수정', value: 'edit', url: null },
  { title: '답변 거절', value: 'reject', url: null },
=======
import EditIcon from '../../../assets/images/edit-icon.png';
import RejectIcon from '../../../assets/images/reject-icon.png';

const DROPDOWN_ITEM_LIST = [
  { title: '답변 수정', value: 'edit', url: EditIcon },
  { title: '답변 거절', value: 'reject', url: RejectIcon },
>>>>>>> 210e56796b48dd3e2e56bca9d478b087729076f6
];

/**
 * 답변하기 피드 카드에서 더보기 메뉴 버튼을 누르면 드롭다운이 나오는데, 드롭다운에서 답변 수정, 답변 거절 기능이 가능
 * @param {Function} onEditButtonClick
 * @param {Function} onRejectButtonClick
 */
function MoreButton({ onEditButtonClick, onRejectButtonClick }) {
  const [isOpen, toggleIsOpen] = useToggle(false);

  const handleMoreButtonClick = () => {
    toggleIsOpen();
  };

  const handleDropdownItemClick = value => {
    if (value === 'edit') {
      onEditButtonClick();
    } else if (value === 'reject') {
      onRejectButtonClick();
    }
  };

  return (
    <StyledMoreButton onClick={handleMoreButtonClick}>
      <img src={moreIcon} alt={'더보기 아이콘'} />
      <DropdownBox
        isDropdownVisible={isOpen}
<<<<<<< HEAD
        minWidth={103}
        topPosition={2.5}
        leftPosition={-4}
=======
        minWidth={110}
        topPosition={2.5}
        leftPosition={-70}
>>>>>>> 210e56796b48dd3e2e56bca9d478b087729076f6
        itemList={DROPDOWN_ITEM_LIST}
        isCurrentStateHighlight={false}
        onItemClick={handleDropdownItemClick}
      />
    </StyledMoreButton>
  );
}

export default MoreButton;

const StyledMoreButton = styled.button`
  position: relative;
<<<<<<< HEAD
  & img {
=======
  & > img {
>>>>>>> 210e56796b48dd3e2e56bca9d478b087729076f6
    height: 26px;
    width: 26px;
  }
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;
