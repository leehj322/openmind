import styled from 'styled-components';
import DropdownBox from '../@shared/DropdownBox';
import useToggle from '../../hooks/useToggle';
import arrowDownImgUrl from '../../assets/images/Arrow-down.svg';

const DropdownToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;

  border: 1px solid var(--gray40);
  border-radius: 8px;
  width: 79px;
  height: 34px;

  color: var(--gray40);
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;

const ArrowImg = styled.img`
  width: 14px;
  height: 14px;
`;

const ITEM_LIST = [
  { title: '이름순', value: 'name', url: null },
  { title: '최신순', value: 'time', url: null },
];

function SubjectSortDropdown({ sortBy, onSortChoice }) {
  const [isVisible, toggleIsVisible] = useToggle(false);

  const handleTogglerClick = () => {
    toggleIsVisible();
  };

  return (
    <DropdownToggler onClick={handleTogglerClick}>
      {ITEM_LIST.find(item => item.value === sortBy).title}
      <ArrowImg src={arrowDownImgUrl} alt="드롭다운화살표" />
      <DropdownBox
        isDropdownVisible={isVisible}
        minWidth={80}
        topPosition={2.7}
        leftPosition={-0.1}
        itemList={ITEM_LIST}
        onItemClick={onSortChoice}
      />
    </DropdownToggler>
  );
}

export default SubjectSortDropdown;
