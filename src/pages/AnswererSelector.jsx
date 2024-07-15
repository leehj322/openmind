import styled from 'styled-components';
import Header from '../components/AnswererSelector/Header';

import DropdownBox from '../components/@shared/DropdownBox';
import editImgUrl from '../assets/images/Edit.png';

const StyledAnswererSelectorPageContainer = styled.div`
  margin: 40px auto 100px;
  width: 1200px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 40px 0 90px;
    width: auto;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin: 40px 0 40px;
    width: auto;
  }
`;

const itemList = [
  { title: '이름순', value: 'name', url: editImgUrl },
  { title: '최신순', value: 'recent', url: editImgUrl },
];

function AnswererSelector() {
  return (
    <StyledAnswererSelectorPageContainer>
      <Header />
      <DropdownBox isDropdownVisible={true} minWidth={80} itemList={itemList} />
    </StyledAnswererSelectorPageContainer>
  );
}

export default AnswererSelector;
