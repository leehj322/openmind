import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../@shared/Button';

/**
 * 답변 생성, 수정 시 사용할 입력 폼
 * @param props
 * @param {string} props.currentAnswer 보여줄 답변 작성 내용
 * @param {Function} props.onSubmitForm 폼 제출 이벤트 핸들러
 * @param {string} props.buttonText 버튼에 들어갈 텍스트
 */
function AnswerForm({ currentAnswer, onSubmitForm, buttonText }) {
  const [inputText, setInputText] = useState(currentAnswer);
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = event => {
    const { value } = event.target;

    setDisabled(value.length === 0);
    setInputText(value);
  };

  return (
    <StyledAnswerForm onSubmit={e => onSubmitForm(e, inputText)}>
      <textarea placeholder={'답변을 입력해주세요'} value={inputText} onChange={handleInputChange} />
      <Button width={'100%'} height={'46px'} btnColor={'var(--brown40)'} disabled={disabled} shape={'square'}>
        {buttonText}
      </Button>
    </StyledAnswerForm>
  );
}
export default AnswerForm;

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

    &:focus {
      outline: 1px solid var(--brown40);
      background-color: var(--brown10);
      color: var(--gray60);
    }
  }
`;
