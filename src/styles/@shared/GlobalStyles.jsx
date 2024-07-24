import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html * {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body{
    min-height: 100vh;
    background-color: var(--bgColor);
    color: var(--defaultFont);
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    outline: none;
    border: none;
  }

  textarea{
    resize: none;
  }

  .actor-font{
    font-family: Actor;
  }
`;

export default GlobalStyle;
