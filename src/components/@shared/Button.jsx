import { lightButtonStyle, darkButtonStyle } from './ButtonStyles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ btnColor }) =>
    btnColor === 'light' ? lightButtonStyle.background : darkButtonStyle.background};
  color: ${({ btnColor }) => (btnColor === 'light' ? lightButtonStyle.text : darkButtonStyle.text)};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;

  width: ${({ style }) => (style && style.width ? style.width : '161px')};
  height: ${({ style }) => (style && style.height ? style.height : '46px')};
  border-radius: ${({ shape }) => (shape === 'square' ? '8px' : '200px')};

  &:hover {
    border: 1px solid;
    border-color: ${({ btnColor }) => (btnColor === 'light' ? lightButtonStyle.border : darkButtonStyle.border)};
    opacity: ${props => (props.disabled ? '0.5' : '0.8')};
  }

  &:active {
    border: 1px solid;
    border-color: ${({ btnColor }) => (btnColor === 'light' ? lightButtonStyle.border : darkButtonStyle.border)};
    background-color: ${({ btnColor }) => (btnColor === 'light' ? lightButtonStyle.pressed : darkButtonStyle.pressed)};
  }
`;

function Button({ children, imgSrc, onClick, pagePath, disabled, shape, btnColor, style }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && pagePath) {
      if (onClick) {
        onClick();
      }
      navigate(pagePath);
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled} shape={shape} btnColor={btnColor} style={style}>
      {children}
      {imgSrc && <img src={imgSrc} alt="화살표" />}
    </StyledButton>
  );
}

export default Button;
