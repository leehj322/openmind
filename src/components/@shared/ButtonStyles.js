import styled from 'styled-components';
import { getThemeColor } from '../../utils/getThemeColor';

//TODO: softButtonStyle 처럼 바꿔주시면됩니다.
//연한 갈색 버튼
export const softButtonStyle = {
  background: getThemeColor('brown10'),
  text: getThemeColor('brown40'),
  border: getThemeColor('brown40'),
  pressed: getThemeColor('brown20'),
};

//진한 갈색 버튼
export const deepButtonStyle = {
  background: 'var(--brown40)',
  text: 'var(--gray10)',
  border: 'var(--brown50)',
  pressed: 'var(--brown50)',
};

//화살표 이미지
export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;

  @media ${({ theme }) => theme.windowSize.mobile} {
    width: 15px; // 작은 화면에서 이미지 크기 조정
  }
`;
