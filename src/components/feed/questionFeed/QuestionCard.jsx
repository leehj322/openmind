import { StyledAnswerText, StyledFeedCardContainer } from '../../../styles/feed/feedCardStyles';
import AnswerTemplate from '../AnswerTemplate';
import AnswerStatus from '../AnswerStatus';
import QuestionTitle from '../QuestionTitle';
import Reaction from '../Reaction';

/**
 * 질문 피드 페이지에서의 질문 카드
 * @param props
 * @param {string} props.questionId 질문 id
 * @param {string} props.questionContent 질문 내용
 * @param {integer} props.likeCount 좋아요 수
 * @param {integer} props.dislikeCount 싫어요 수
 * @param {string} props.questionCreateAt 질문 생성 시간
 * @param {object | null} props.answer 답변 객체
 */
function QuestionCard({
  // TODO: 상위 컴포넌트에서 데이터를 넣어줄 수 있게 되면 테스트용 기본값 삭제 예정
  questionId,
  questionContent = '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
  likeCount = 0,
  dislikeCount = 0,
  questionCreateAt = '2024-07-05',
  answer,
}) {
  const isHasAnswer = !!answer;

  return (
    <StyledFeedCardContainer>
      <AnswerStatus isHasAnswer={isHasAnswer} />
      <QuestionTitle question={questionContent} questionCreateAt={questionCreateAt} />
      {isHasAnswer && (
        <AnswerTemplate>
          {answer.isRejected ? (
            <StyledAnswerText $isRejected>답변 거절</StyledAnswerText>
          ) : (
            <StyledAnswerText>{answer.content}</StyledAnswerText>
          )}
        </AnswerTemplate>
      )}
      <Reaction likeCount={likeCount} dislikeCount={dislikeCount} questionId={questionId} />
    </StyledFeedCardContainer>
  );
}

export default QuestionCard;
