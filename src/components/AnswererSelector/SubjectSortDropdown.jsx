import { useState } from 'react';
import styled from 'styled-components';
import DropdownBox from '../@shared/DropdownBox';

const DropdownToggler = styled.div`
  width: 200px;
  cursor: pointer;
`;

const itemList = [
  { title: '이름순', value: 'name', url: null },
  { title: '최신순', value: 'time', url: null },
];

function SubjectSortDropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleTogglerClick = () => {
    setIsDropdownVisible(true);
  };
  return (
    <>
      <DropdownToggler onClick={handleTogglerClick}>
        여기에
        <DropdownBox isDropdownVisible={true} minWidth={80} itemList={itemList} />
      </DropdownToggler>
    </>
  );
}

export default SubjectSortDropdown;
