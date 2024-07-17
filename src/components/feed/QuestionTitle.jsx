import { styled } from 'styled-components';
import getElapsedPeriod from '../../utils/getElapsedPeriod';

/**
 * 질문 내용과 생성 시간을 보여준다
 * @param props
 * @param {string} props.question 질문 내용
 * @param {string} props.questionCreateAt 질문 생성 시간
 */
function QuestionTitle({ questionCreateAt, question }) {
  const elapedPeriod = getElapsedPeriod(questionCreateAt);

  return (
    <StyledQuestionTitleArea>
      <p>질문 · {elapedPeriod}</p>
      <h3>{question}</h3>
    </StyledQuestionTitleArea>
  );
}

export default QuestionTitle;

const StyledQuestionTitleArea = styled.section`
  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: var(--gray40);
  }

  & h3 {
    font-family: Actor;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: var(--gray60);
  }
`;
