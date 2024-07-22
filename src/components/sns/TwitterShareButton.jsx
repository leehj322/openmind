import styled from 'styled-components';
import TwitterIcon from '../../assets/images/twitter_icon.png';
import { Helmet } from 'react-helmet';
import Tooltip from './Tooltip';

const StyledShareIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function TwitterShareButton({ subject }) {
  const shareTwitter = () => {
    const sendText = `${subject.name}님에게 궁금한 점을 물어보러 가요!`;
    const sendUrl = `http://localhost:5173/post/${subject.id}`; //props로 뒷부분 아이디 받아와서 쓸 수 있도록 제작 예정

    window.open('https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl);
  };

  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="피드 구경하러 가기" />
        <meta name="twitter:image" content="무엇이든 물어보세요!" />
      </Helmet>

      <Tooltip content="트위터로 공유하기">
        <StyledShareIcon src={TwitterIcon} alt="트위터 아이콘" onClick={shareTwitter} />
      </Tooltip>
    </>
  );
}

export default TwitterShareButton;
