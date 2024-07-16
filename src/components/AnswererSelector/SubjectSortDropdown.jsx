import styled from 'styled-components';
import DropdownBox from '../@shared/DropdownBox';
import useToggle from '../../hooks/useToggle';

const DropdownToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border: 1px solid var(--gray40);
  border-radius: 8px;
  width: 79px;
  height: 34px;

  color: var(--gray40);
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
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
      <DropdownBox isDropdownVisible={isVisible} minWidth={80} itemList={ITEM_LIST} onItemClick={onSortChoice} />
    </DropdownToggler>
  );
}

export default SubjectSortDropdown;
