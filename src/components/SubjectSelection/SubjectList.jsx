import styled from 'styled-components';
import PageNavigator from './PageNavigator';

const SubjectListArea = styled.section`
  margin: 0 auto 40px;
  width: 940px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 32px 40px;
    width: auto;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin: 0 24px 60px;
    width: auto;
  }
`;

const SubjectListGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestQuestionCard = styled.li`
  background-color: black;
  width: 100%;
`;

function SubjectList() {
  return (
    <SubjectListArea>
      <SubjectListGrid>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
        <TestQuestionCard>1</TestQuestionCard>
      </SubjectListGrid>
      <PageNavigator />
    </SubjectListArea>
  );
}

export default SubjectList;
