import styled from 'styled-components';
import { StyledFeedCardListContainer } from '../../../styles/feed/feedCardListStyles';
import { StyledQuestionCountArea } from '../../../styles/feed/questionCountStyles';
import MessagesIconUrl from '../../../assets/images/ic_Messages.svg';
import QuestionCard from './QuestionCard';

const StyledMessagesImg = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`;

function QuestionCardList({ questionCount, questions, subjectId }) {
  return (
    <StyledFeedCardListContainer>
      <StyledQuestionCountArea>
        <StyledMessagesImg src={MessagesIconUrl} />
        {questionCount}개의 질문이 있습니다
      </StyledQuestionCountArea>
      {questions.map(question => {
        const { id, content, like, dislike, createdAt, answer } = question;

        const isHasAnswer = answer ? true : false;

        return (
          <QuestionCard
            key={id}
            question={content}
            likeCount={like}
            dislikeCount={dislike}
            questionCreateAt={createdAt}
            isHasAnswer={isHasAnswer}
            subjectId={subjectId}
          />
        );
      })}
    </StyledFeedCardListContainer>
  );
}

export default QuestionCardList;
