import styled, { keyframes, css } from 'styled-components';
import DropdownBox from '../@shared/DropdownBox';
import useToggle from '../../hooks/useToggle';
import arrowDownImgUrl from '../../assets/images/Arrow-down.svg';
import filter from '../../styles/@shared/filter';

const rotateUpAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const rotateDownAnimation = keyframes`
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const rotateAnimation = $isDropdownVisible => css`
  animation: ${$isDropdownVisible ? rotateUpAnimation : rotateDownAnimation} 0.2s linear forwards;
`;

const DropdownToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;

  border: 1px solid ${({ $isDropdownVisible }) => ($isDropdownVisible ? 'var(--gray60)' : 'var(--gray40)')};
  border-radius: 8px;
  width: 79px;
  height: 34px;

  color: ${({ $isDropdownVisible }) => ($isDropdownVisible ? 'var(--gray60)' : 'var(--gray40)')};
  font-size: 14px;
  font-weight: 500;

  & img {
    width: 14px;
    height: 14px;
    filter: ${({ $isDropdownVisible }) => ($isDropdownVisible ? filter.gray60 : '')};
    ${({ $isDropdownVisible }) => rotateAnimation($isDropdownVisible)}
  }

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
    <DropdownToggler onClick={handleTogglerClick} $isDropdownVisible={isVisible}>
      {ITEM_LIST.find(item => item.value === sortBy).title}
      <img src={arrowDownImgUrl} alt="드롭다운화살표" />
      <DropdownBox
        isDropdownVisible={isVisible}
        minWidth={80}
        topPosition={4}
        leftPosition={-2}
        itemList={ITEM_LIST}
        onItemClick={onSortChoice}
      />
    </DropdownToggler>
  );
}

export default SubjectSortDropdown;
