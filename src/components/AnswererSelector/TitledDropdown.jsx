import styled from 'styled-components';
import SubjectSortDropdown from './SubjectSortDropdown';

const StyledTitledDropdownArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 46px auto 30px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
  }
`;

const Title = styled.h1`
  color: var(--gray60);
  font-size: 40px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 24px;
  }
`;

function TitledDropdown() {
  return (
    <StyledTitledDropdownArea>
      <Title>누구에게 질문할까요?</Title>
      <SubjectSortDropdown />
    </StyledTitledDropdownArea>
  );
}

export default TitledDropdown;
