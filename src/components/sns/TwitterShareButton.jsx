import styled from 'styled-components';
import TwitterIcon from '../../images/twitter_icon.png';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Tooltip from './Tooltip';

const StyledShareIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function TwitterShareButton({ subject }) {
  const [helmetData, setHelmetData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const shareTwitter = () => {
    const sendText = `${subject.name}님에게 궁금한 점을 물어보러 가요!`;
    const sendUrl = 'http://localhost:5173/post/123'; //props로 뒷부분 아이디 받아와서 쓸 수 있도록 제작 예정

    //오류가 생겨도 undefined가 표출되지 않도록 처리
    setHelmetData({
      title: subject.name ? `${subject.name}님의 피드` : '피드',
      description: subject.name ? `${subject.name}님에게 궁금한 점을 물어보러 가요!` : '궁금한 점을 물어보러 가요!',
      image: subject.imageSource || '',
    });

    window.open('https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl);
  };

  return (
    <>
      {helmetData && (
        <Helmet>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={helmetData.title} />
          <meta name="twitter:description" content={helmetData.description} />
          <meta name="twitter:image" content={helmetData.image} />
        </Helmet>
      )}

      <Tooltip content="트위터로 공유하기">
        <StyledShareIcon src={TwitterIcon} alt="클립보드 복사 아이콘" onClick={shareTwitter} />
      </Tooltip>
    </>
  );
}

export default TwitterShareButton;
