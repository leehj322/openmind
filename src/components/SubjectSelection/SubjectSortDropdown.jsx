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

/**
 * 파라미터 값이 true 인 경우 180도 회전하고 회전한 상태를 유지함 false인 경우 원래상태로 다시 돌아옴
 * @param {boolean} shouldRotate180Deg
 * @returns styled components의 css를 리턴함
 */
const rotate180DegAnimation = shouldRotate180Deg => css`
  animation: ${shouldRotate180Deg ? rotateUpAnimation : rotateDownAnimation} 0.2s linear forwards;
`;

const dropdownPopupAnimation = keyframes`
  0% {
    transform: translateY(-100%); 
  }
  100% {
    transform: translateY(0);
  }
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
    ${({ $isDropdownVisible }) => rotate180DegAnimation($isDropdownVisible)}
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

  const currentItemTitle = ITEM_LIST.find(item => item.value === sortBy).title;

  return (
    <DropdownToggler onClick={handleTogglerClick} $isDropdownVisible={isVisible}>
      {currentItemTitle}
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
