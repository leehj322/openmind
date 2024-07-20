import { css } from 'styled-components';

export const getThemeColor = name => {
  return css`
    ${({ theme }) => theme[name]}
  `;
};
