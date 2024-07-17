import styled from 'styled-components';
import { StyledAnswerText, StyledFeedCardContainer } from '../../../styles/feed/feedCardStyles';
import AnswerStatus from '../AnswerStatus';
import MoreButton from './MoreButton';
import QuestionTitle from '../QuestionTitle';
import AnswerTemplate from '../AnswerTemplate';
import Reaction from '../Reaction';
import { useState } from 'react';
import AnswerForm from './AnswerForm';
import putAnswer from '../../../apis/putAnswer';
import postAnswer from '../../../apis/postAnswer';

/**
 * 질문 피드 페이지에서의 질문 카드
 * @param props
 * @param {string} props.questionId 질문 id
 * @param {string} props.questionContent 질문 내용
 * @param {integer} props.likeCount 좋아요 수
 * @param {integer} props.dislikeCount 싫어요 수
 * @param {string} props.questionCreateAt 질문 생성 시간
 * @param {object || null} props.answer 답변 객체
 */
function AnswerCard({
  // TODO: 상위 컴포넌트에서 데이터를 넣어줄 수 있게 되면 테스트용 기본값 삭제 예정
  questionId,
  questionContent = '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
  likeCount = 0,
  dislikeCount = 0,
  questionCreateAt = '2024-07-05',
  answer,
}) {
  const isHasAnswer = !!answer;
  const [currentAnswer, setCurrentAnswer] = useState(isHasAnswer ? answer.content : '');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleEditFormSubmit = (event, inputText) => {
    event.preventDefault();

    putAnswer({ answerId: answer.id, content: inputText });
    setIsEditing(false);
    setCurrentAnswer(inputText);
  };

  const handleCreateFormSubmit = (event, inputText) => {
    event.preventDefault();

    postAnswer({ questionId: questionId, content: inputText });
    setCurrentAnswer(inputText);
  };

  const renderAnswerContent = () => {
    if (answer?.isRejected) {
      // 답변 거절의 경우
      return <StyledAnswerText $isRejected>답변 거절</StyledAnswerText>;
    } else if (isEditing) {
      // 답변 거절은 아니지만, 수정 하기 버튼을 누른 경우
      return <AnswerForm currentAnswer={currentAnswer} buttonText="수정 완료" onSubmitForm={handleEditFormSubmit} />;
    } else if (!currentAnswer) {
      // 답변 거절도 아니고, 수정중도 아니지만, 받아온 답변이 빈값인 경우
      return <AnswerForm currentAnswer={currentAnswer} buttonText="답변 완료" onSubmitForm={handleCreateFormSubmit} />;
    } else {
      // 답변 거절도 아니고, 수정중도 아니지만, 받아온 답변이 존재하는 경우
      return <StyledAnswerText>{currentAnswer}</StyledAnswerText>;
    }
  };

  return (
    <StyledFeedCardContainer>
      <StyledAnswerCardUpperArea>
        <AnswerStatus isHasAnswer={isHasAnswer} />
        <MoreButton handleEditButtonClick={handleEditButtonClick} />
      </StyledAnswerCardUpperArea>
      <QuestionTitle question={questionContent} questionCreateAt={questionCreateAt} />
      <AnswerTemplate>{renderAnswerContent()}</AnswerTemplate>
      <Reaction likeCount={likeCount} dislikeCount={dislikeCount} />
    </StyledFeedCardContainer>
  );
}

export default AnswerCard;

const StyledAnswerCardUpperArea = styled.section`
  display: flex;
  justify-content: space-between;
`;
