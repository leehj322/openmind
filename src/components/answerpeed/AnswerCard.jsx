import styled from 'styled-components';
import { StyledPeedCardContainer } from '../../styles/peedCard/peedCardStyles';
import Answer from '../questionPeed/Answer';
import AnswerStatus from '../questionPeed/AnswerStatus';
import QuestionTitle from '../questionPeed/QuestionTitle';
import Reaction from '../questionPeed/Reaction';
import MoreButton from './MoreButton';

/**
 * 질문 피드 페이지에서의 질문 카드
 * @param props
 * @param {string} props.qustionId 질문 아이디
 * @param {string} props.qustion 질문 내용
 * @param {integer} props.likeCount 좋아요 수
 * @param {integer} props.dislikeCount 싫어요 수
 * @param {string} props.questionCreateAt 질문 생성 시간
 * @param {string} props.answer 답변 내용
 * @param {string} props.answerId 답변 아이디
 * @param {string} props.isRejected 답변 거절 유무
 * @param {string} props.answerCreatedAt 답변 생성 시간
 */
function AnswerCard({
  // TODO: 상위 컴포넌트에서 데이터를 넣어줄 수 있게 되면 테스트용 기본값 삭제 예정
  qustionId = '1234',
  qustion = '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
  likeCount = 0,
  dislikeCount = 0,
  questionCreateAt = '2024-07-05',
  answerId = '1111',
  answer = `그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며,
            이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상,
            인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가
            우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을
            방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.`,
  isRejected = false,
  answerCreatedAt = '2024-07-05',
}) {
  /*
  TODO:
    - 케밥 메뉴 버튼 구현
    - 받아온 qustionId, answerId 사용해서 질문 수정, 삭제, 답변 수정 삭제 구현
    - 답변이 있으면 답변을 표출하고, 없으면 입력창과 등록 버튼이 보이도록
  */
  const isHasAnswer = !!answer;

  return (
    <StyledPeedCardContainer>
      <StyledCardUpperArea>
        <AnswerStatus isHasAnswer={isHasAnswer} />
        <MoreButton />
      </StyledCardUpperArea>
      <QuestionTitle qustion={qustion} questionCreateAt={questionCreateAt} />
      <Answer answer={answer} answerCreatedAt={answerCreatedAt} isRejected={isRejected} />
      <Reaction likeCount={likeCount} dislikeCount={dislikeCount} />
    </StyledPeedCardContainer>
  );
}

export default AnswerCard;

const StyledCardUpperArea = styled.section`
  display: flex;
  justify-content: space-between;
`;
