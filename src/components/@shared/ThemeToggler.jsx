import styled from 'styled-components';
import { useIsDarkMode, useToggleDarkMode } from '../../contexts/DarkModeProvider';

/**
 * 테마를 바꿔주는 버튼 컴포넌트
 */
function ThemeToggler() {
  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useToggleDarkMode();
  const themeEmoji = isDarkMode ? '🌙' : '☀️';

  const handleThemeButtonClick = () => {
    toggleDarkMode();
  };

  return <StyledThemeButton onClick={handleThemeButtonClick}>{themeEmoji}</StyledThemeButton>;
}

export default ThemeToggler;

const StyledThemeButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: var(--bgColor);
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 30px;
  border: 1px solid var(--gray50);
  z-index: 21;

  &:hover {
    cursor: pointer;
  }
`;
