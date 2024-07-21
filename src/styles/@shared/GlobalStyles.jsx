import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { getThemeColor } from '../../utils/getThemeColor';

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
    background-color: ${getThemeColor('bgColor')};
    color: ${getThemeColor('defaultFont')};
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
`;

export default GlobalStyle;
