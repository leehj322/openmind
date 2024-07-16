import { useState } from 'react';
import styled from 'styled-components';

/**
 * 답변 내용과 답변 거절 유무를 보여준다
 * @param props
 * @param {string} props.answerId 답변 아이디
 * @param {string} props.answer 답변 내용
 * @param {string} props.isRejected 답변 거절 유무
 * @param {string} props.isEditing 답변 수정중인가
 */
function AnswerContent({ answerId, answer, isRejected, isEditing }) {
  const [inputText, setInputText] = useState('');
  const [disabled, setDisabled] = useState(false);

  // const isHasAnswer = !!answer;
  const isHasAnswer = false;
  const buttonText = isEditing ? '수정 완료' : '답변 완료';

  const handleInputChange = event => {
    const { value } = event.target;

    setDisabled(value.length === 0);
    setInputText(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (isEditing) {
      // answerId, inputText로 수정 API 호출
    } else {
      // answerId, inputText로 답변 생성 API 호출
    }
  };

  if (isRejected) {
    return <p>답변 거절</p>;
  }
  if (isHasAnswer) {
    return <p>{answer}</p>;
  }

  return (
    <StyledAnswerForm onSubmit={handleFormSubmit}>
      <textarea placeholder={'답변을 입력해주세요'} value={inputText} onChange={handleInputChange} />
      {/* TODO: 리나님이 공통 버튼 컴포넌트 만들어지면 갈아끼우기 */}
      <button
        disabled={disabled}
        style={{
          height: '46px',
          width: '100%',
          backgroundColor: 'var(--brown40)',
          color: 'white',
          borderRadius: '8px',
        }}>
        {buttonText}
      </button>
    </StyledAnswerForm>
  );
}
export default AnswerContent;

const StyledAnswerForm = styled.form`
  & textarea {
    width: 100%;
    height: 186px;
    max-height: 186px;
    border-radius: 8px;
    padding: 16px;
    background-color: var(--gray20);

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

    margin-bottom: 8px;

    &::placeholder {
      color: var(--gray40);
    }
  }
`;
