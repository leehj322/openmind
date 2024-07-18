import styled, { css } from 'styled-components';

//연한 갈색 버튼
export const SoftButtonStyle = {
  background: 'var(--brown10)',
  text: 'var(--brown40)',
  border: 'var(--brown40)',
  pressed: 'var(--brown20)',
};

//진한 갈색 버튼
export const DeepButtonStyle = {
  background: 'var(--brown40)',
  text: 'var(--gray10)',
  border: 'var(--brown50)',
  pressed: 'var(--brown50)',
};

//화살표 이미지
export const SoftArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const deepArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;
