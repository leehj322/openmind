import styled from 'styled-components';

/**
 * 답변 상태를 보여준다
 * @param props
 * @param {string} props.answer 답변 내용
 */
function AnswerStatus({ answer }) {
  const answerStatus = answer ? '답변 완료' : '미답변';
  return <StyledAnswerStatus>{answerStatus}</StyledAnswerStatus>;
}

export default AnswerStatus;

const StyledAnswerStatus = styled.article`
  height: fit-content;
  width: fit-content;
  padding: 4px 12px;
  border: ${({ theme }) => `1px solid ${theme.borderBrown}`};
  color: ${({ theme }) => theme.borderBrown};

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 8px;
`;
