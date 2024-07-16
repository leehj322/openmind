import { styled } from 'styled-components';
import likeIcon from '../../assets/images/like-icon.png';
import dislikeIcon from '../../assets/images/dislike-icon.png';

/**
 * 좋아요 싫어요를 보여주고 선택할 수 있다
 * @param props
 * @param {integer} props.likeCount 좋아요 수
 * @param {integer} props.dislikeCount 싫어요 수
 */
function Reaction({ likeCount, dislikeCount }) {
  return (
    <StyledReactionArea>
      <article>
        <img src={likeIcon} alt={'좋아요 아이콘'} />
        <span>좋아요</span>
        <span>{likeCount}</span>
      </article>
      <article>
        <img src={dislikeIcon} alt={'싫어요 아이콘'} />
        <span>싫어요</span>
      </article>
    </StyledReactionArea>
  );
}

export default Reaction;

const StyledReactionArea = styled.section`
  display: flex;
  gap: 32px;
  height: 42px;
  align-items: flex-end;
  border-top: 1px solid var(--gray30);

  & article {
    display: flex;
    gap: 6px;

    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;

    & img {
      width: 16px;
      height: 16px;
    }
  }
`;
