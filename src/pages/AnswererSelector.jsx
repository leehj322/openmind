import styled from 'styled-components';
import Header from '../components/AnswererSelector/Header';

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

function AnswererSelector() {
  return (
    <StyledAnswererSelectorPageContainer>
      <Header />
    </StyledAnswererSelectorPageContainer>
  );
}

export default AnswererSelector;
