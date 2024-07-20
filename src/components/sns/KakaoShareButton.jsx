import React, { useEffect } from 'react';
import kakaoIcon from '../../images/kakao_icon.png';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const StyledShareIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const KakaoShareButton = ({ subject }) => {
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('135b2ce1d43f8ad70ae429b48a8bdc18'); // 발급받은 앱 키로 초기화합니다.
    }
  }, []);

  const shareToKakao = () => {
    if (window.Kakao && window.Kakao.Link) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${subject.name}님의 피드`,
          description: `${subject.name}님에게 궁금한 점을 물어보러 가요!`,
          imageUrl: `${subject.imageSource}`,
          link: {
            //props로 뒷부분 아이디 받아와서 쓸 수 있도록 제작 예정
            mobileWebUrl: 'http://localhost:5173/post/123',
            webUrl: 'http://localhost:5173/post/123',
          },
        },
        buttons: [
          {
            title: '웹으로 보기', //버튼에 표시될 내용
            link: {
              mobileWebUrl: 'http://localhost:5173/post/123',
              webUrl: 'http://localhost:5173/post/123',
            },
          },
        ],
      });
    } else {
      console.error('Kakao SDK가 초기화되지 않았습니다.');
    }
  };

  return (
    <Tooltip content="카카오톡으로 공유하기">
      <StyledShareIcon src={kakaoIcon} alt="카카오톡 아이콘" onClick={shareToKakao} />
    </Tooltip>
  );
};

export default KakaoShareButton;
