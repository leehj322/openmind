import { styled } from 'styled-components';
import likeIcon from '../../assets/images/like-icon.png';
import dislikeIcon from '../../assets/images/dislike-icon.png';
import { jelloHorizontalAnimation, shakeLeftAnimation } from '../../styles/feed/feedCardStyles';
import { useState, useEffect } from 'react';
import useSelectReactionMutation from '../../queries/useReactionMutation';
import ConfettiExplosion from 'react-confetti-explosion';
import { EXPLODE_PROPS, LIMIT_DISLIKE_COUNT } from '../../constants/feedCard';

const LIKE_ICON_FILTER =
  'brightness(0) saturate(100%) invert(51%) sepia(61%) saturate(7062%) hue-rotate(203deg) brightness(97%) contrast(95%)';

const DISLIKE_ICON_FILTER =
  'brightness(0) saturate(100%) invert(27%) sepia(26%) saturate(3214%) hue-rotate(330deg) brightness(103%) contrast(101%)';

/**
 * 좋아요 싫어요를 보여주고 선택할 수 있다
 * @param props
 * @param {integer} props.likeCount 좋아요 수
 * @param {string} props.questionId 질문 id
 */
function Reaction({ likeCount, questionId = '123424' }) {
  const reactionList = JSON.parse(localStorage.getItem('reactionList'));

  const [reactedType, setReactedType] = useState('');
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  const [isExplode, setIsExplode] = useState(false);

  const { mutate: reactionMutate } = useSelectReactionMutation();
  const { mutate: updateAnswerMutate } = useSelectReactionMutation();

  const handleReactionButtonClick = event => {
    const { type } = event.currentTarget.dataset;

    if (type === 'like') {
      setIsExplode(true);
    }

    if (!reactedType) {
      // 이력이 존재하지 않을 경우에만 실행되는 로직
      reactionList.push({ questionId: questionId, type: type });
      localStorage.setItem('reactionList', JSON.stringify(reactionList));

      setCurrentLikeCount(prevState => prevState + 1);
      reactionMutate(
        { questionId: questionId, type: type },
        {
          onSuccess: data => {
            const answer = data.answer;
            // 리액션 제출에 성공한다면,
            // 답변 객체가 존재하고, 답변 거절이 되지 않았고, 응답 받은 싫어요 수가 기준치보다 많다면
            // 답변 거절 상태로 변경 요청을 서버로 보냅니다.
            if (answer && !answer.isRejected && data.dislike >= LIMIT_DISLIKE_COUNT) {
              updateAnswerMutate({ answerId: answer.id, isRejected: true });
            }
          },
        }
      );
    }
  };

  useEffect(() => {
    if (!reactionList) {
      // 최초 접속이라 반응 이력 배열이 없다면 생성한다.
      localStorage.setItem('reactionList', JSON.stringify([]));
    } else if (questionId && reactionList) {
      // 로컬 스토리지에서 해당 유저가 반응한 {questionId, type} 객체 베열에서 해당 질문에 대한 이력을 찾는다.
      const reaction = reactionList.find(reaction => reaction.questionId === questionId);
      if (reaction) {
        // 이력이 존재한다면 setReactedType에 저장한다.
        setReactedType(reaction.type);
      }
    }
  }, [reactionList]);

  return (
    <StyledReactionContainer>
      <StyledReactionButton
        className={'like-button'}
        data-type={'like'}
        $reactedType={reactedType}
        onClick={handleReactionButtonClick}>
        <img className={'like-icon'} src={likeIcon} alt={'좋아요 아이콘'} />
        <span>
          좋아요{isExplode && <ConfettiExplosion {...EXPLODE_PROPS} onComplete={() => setIsExplode(false)} />}
        </span>
        <span>{currentLikeCount}</span>
      </StyledReactionButton>
      <StyledReactionButton
        className={'dislike-button'}
        data-type={'dislike'}
        $reactedType={reactedType}
        onClick={handleReactionButtonClick}>
        <img className={'dislike-icon'} src={dislikeIcon} alt={'싫어요 아이콘'} />
        <span>싫어요</span>
      </StyledReactionButton>
    </StyledReactionContainer>
  );
}

export default Reaction;

const StyledReactionContainer = styled.section`
  display: flex;
  gap: 15px;
  align-items: center;
  border-top: 1px solid var(--gray30);
  padding-top: 15px;
`;

const StyledReactionButton = styled.button`
  display: flex;
  gap: 6px;
  /* background-color: red; */
  padding: 10px 8px;
  border-radius: 30px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  &.like-button {
    color: ${({ $reactedType }) => $reactedType === 'like' && 'var(--blue)'};

    & .like-icon {
      filter: ${({ $reactedType }) => $reactedType === 'like' && LIKE_ICON_FILTER};
    }
  }

  &.dislike-button {
    color: ${({ $reactedType }) => $reactedType === 'dislike' && 'var(--red)'};

    & .dislike-icon {
      filter: ${({ $reactedType }) => $reactedType === 'dislike' && DISLIKE_ICON_FILTER};
    }
  }

  &:hover {
    cursor: pointer;

    &.like-button {
      color: var(--blue);

      & .like-icon {
        ${({ $reactedType }) => ($reactedType === 'like' ? jelloHorizontalAnimation : shakeLeftAnimation)}
        filter: ${LIKE_ICON_FILTER};
      }
    }

    &.dislike-button {
      color: var(--red);
      & .dislike-icon {
        filter: ${DISLIKE_ICON_FILTER};
      }
    }
  }

  & .like-icon,
  .dislike-icon {
    width: 16px;
    height: 16px;
  }
`;
