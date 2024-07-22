import styled from 'styled-components';
import Header from '../components/SubjectSelection/Header';
import TitledDropdown from '../components/SubjectSelection/TitledDropdown';
import SubjectList from '../components/SubjectSelection/SubjectList';
import { useState } from 'react';
import { MEDIA_QUERY_SIZES } from '../constants/mediaQuerySizes';

const StyledSubjectSelectionPageContainer = styled.div`
  margin: 40px auto 100px;
  width: 1200px;

  @media ${MEDIA_QUERY_SIZES.tablet} {
    margin: 40px 0 90px;
    width: auto;
  }

  @media ${MEDIA_QUERY_SIZES.mobile} {
    margin: 40px 0 40px;
    width: auto;
  }
`;

function SubjectSelection() {
  const [sortBy, setSortBy] = useState('name'); // 기본 이름순

  return (
    <StyledSubjectSelectionPageContainer>
      <Header />
      <TitledDropdown sortBy={sortBy} onSortChoice={setSortBy} />
      <SubjectList sortBy={sortBy} />
    </StyledSubjectSelectionPageContainer>
  );
}

export default SubjectSelection;
