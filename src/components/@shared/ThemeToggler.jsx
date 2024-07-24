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
  position: absolute;
  top: 10px;
  left: 70px;
  background-color: var(--bgColor);
  padding: 10px 30px;
  font-size: 30px;
  border-radius: 30px;
  border: 1px solid var(--gray50);
  z-index: 100;
  @media (min-width: 375px) and (max-width: 767px) {
    left: 20px;
    top: -200px;
    padding: 5px 20px;
    font-size: 25px;
  }
`;
