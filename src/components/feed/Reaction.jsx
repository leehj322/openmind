import { styled } from 'styled-components';
import likeIcon from '../../assets/images/like-icon.png';
import dislikeIcon from '../../assets/images/dislike-icon.png';
import { jelloHorizontalAnimation, shakeLeftAnimation } from '../../styles/feed/feedCardStyles';
import { useState, useEffect } from 'react';
import useSelectReactionMutation from '../../queries/useReactionMutation';
import ConfettiExplosion from 'react-confetti-explosion';
import { EXPLODE_PROPS, LIMIT_DISLIKE_COUNT } from '../../constants/feedCard';
import { getThemeColor } from '../../utils/getThemeColor';

/**
 * 좋아요 싫어요를 보여주고 선택할 수 있다
 * @param props
 * @param {integer} props.likeCount 좋아요 수
 * @param {string} props.questionId 질문 id
 */
function Reaction({ likeCount, questionId }) {
  // TODO: '123424'는 테스트값이므로 향후 삭제 예정
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

      // 클릭한 리액션이 좋아요일 경우에만 좋아요 개수 증가
      type === 'like' && setCurrentLikeCount(prevState => prevState + 1);

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
        $isExplode={isExplode}
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
  border-top: 1px solid ${getThemeColor('gray30')};
  padding-top: 15px;
`;

const StyledReactionButton = styled.button`
  display: flex;
  gap: 6px;
  /* background-color: red; */
  padding: 10px 8px;
  border-radius: 30px;
  color: ${getThemeColor('defaultFont')};

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  &.like-button {
    color: ${({ $reactedType, theme }) => $reactedType === 'like' && theme.blue};

    & .like-icon {
      ${({ $isExplode }) => $isExplode && jelloHorizontalAnimation}
      filter: ${({ $reactedType, theme }) => $reactedType === 'like' && theme.blueFilter};
    }
  }

  &.dislike-button {
    color: ${({ $reactedType, theme }) => $reactedType === 'dislike' && theme.red};

    & .dislike-icon {
      filter: ${({ $reactedType, theme }) => $reactedType === 'dislike' && theme.redFilter};
    }
  }

  &:hover {
    cursor: pointer;

    &.like-button {
      color: ${getThemeColor('blue')};

      & .like-icon {
        // 폭죽이 터지는 중이 아니거나, $reactedType가 falsy값일 경우에만 흔들림 애니메이션 적용
        // !$isExplode이 없으면 스타일 충돌이 일어날 수 있음, 동적인 변수를 사용하는데 위치에 따른 덮어쓰기는 좋지 않다고 판단
        ${({ $isExplode, $reactedType }) => !$isExplode && !$reactedType && shakeLeftAnimation}
        filter: ${getThemeColor('blueFilter')};
      }
    }

    &.dislike-button {
      color: ${getThemeColor('red')};
      & .dislike-icon {
        filter: ${getThemeColor('redFilter')};
      }
    }
  }

  & .like-icon,
  .dislike-icon {
    width: 16px;
    height: 16px;
  }
`;
