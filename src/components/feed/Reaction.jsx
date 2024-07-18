import { styled } from 'styled-components';
import likeIcon from '../../assets/images/like-icon.png';
import dislikeIcon from '../../assets/images/dislike-icon.png';
import { jelloHorizontalAnimation, shakeLeftAnimation } from '../../styles/feed/feedCardStyles';
import { useState } from 'react';
import useSelectReactionMutation from '../../queries/useReactionMutation';

/**
 * 좋아요 싫어요를 보여주고 선택할 수 있다
 * @param props
 * @param {integer} props.likeCount 좋아요 수
 * @param {integer} props.dislikeCount 싫어요 수
 * @param {string} props.questionId 질문 id
 */
function Reaction({ likeCount, dislikeCount, questionId }) {
  const reactionObject = JSON.parse(localStorage.getItem('reactionObject'));
  const [reactedType, setReactedType] = useState((questionId && reactionObject[questionId]) || '');
  const [like, setLike] = useState(likeCount);
  const { mutate } = useSelectReactionMutation();

  const handleReactionButtonClick = event => {
    const { type } = event.currentTarget.dataset;

    if (questionId && !reactedType) {
      localStorage.setItem('reactionObject', JSON.stringify({ [questionId]: type }));
      setReactedType('like');

      mutate(
        { questionId: questionId, type: type },
        {
          onSuccess: data => {
            setLike(data.like);
          },
        }
      );
    }
  };

  return (
    <StyledReactionContainer>
      <StyledReactionButton
        className={'like-button'}
        data-type={'like'}
        $reactedType={reactedType}
        onClick={handleReactionButtonClick}>
        <img className={'like-icon'} src={likeIcon} alt={'좋아요 아이콘'} />
        <span>좋아요</span>
        <span>{like}</span>
      </StyledReactionButton>
      <StyledReactionButton className={'dislike-button'} data-type={'dislike'} onClick={handleReactionButtonClick}>
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
      filter: ${({ $reactedType }) =>
        $reactedType === 'like' &&
        `brightness(0) saturate(100%) invert(51%) sepia(61%) saturate(7062%) hue-rotate(203deg) brightness(97%)
          contrast(95%)`};
    }
  }

  &.dislike-button {
    color: ${({ $reactedType }) => $reactedType === 'dislike' && 'var(--red)'};

    & .dislike-icon {
      filter: ${({ $reactedType }) =>
        $reactedType === 'dislike' &&
        `brightness(0) saturate(100%) invert(27%) sepia(26%) saturate(3214%) hue-rotate(330deg) brightness(103%)
          contrast(101%)`};
    }
  }

  &:hover {
    cursor: pointer;

    &.like-button {
      color: var(--blue);

      & .like-icon {
        ${({ $reactedType }) => ($reactedType === 'like' ? jelloHorizontalAnimation : shakeLeftAnimation)}
        filter: brightness(0) saturate(100%) invert(51%) sepia(61%) saturate(7062%) hue-rotate(203deg) brightness(97%)
          contrast(95%);
      }
    }

    &.dislike-button {
      color: var(--red);
      & .dislike-icon {
        filter: brightness(0) saturate(100%) invert(27%) sepia(26%) saturate(3214%) hue-rotate(330deg) brightness(103%)
          contrast(101%);
      }
    }
  }

  & .like-icon,
  .dislike-icon {
    width: 16px;
    height: 16px;
  }
`;
