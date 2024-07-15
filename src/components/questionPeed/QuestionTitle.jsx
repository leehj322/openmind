import { styled } from 'styled-components';

/**
 * 질문 내용과 생성 시간을 보여준다
 * @param props
 * @param {string} props.qustion 질문 내용
 * @param {string} props.questionCreateAt 질문 생성 시간
 */
function QuestionTitle({ questionCreateAt, qustion }) {
  return (
    <StyledQuestionTitleArea>
      <p>질문 · {questionCreateAt}</p>
      <h3>{qustion}</h3>
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
