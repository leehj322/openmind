import { SoftButtonStyle, DeepButtonStyle } from './ButtonStyles';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledButton = styled(({ btnColor, ...rest }) => <button {...rest} />)`
  background-color: ${({ btnColor }) =>
    btnColor === 'soft' ? SoftButtonStyle.background : DeepButtonStyle.background};
  color: ${({ btnColor }) => (btnColor === 'soft' ? SoftButtonStyle.text : DeepButtonStyle.text)};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;

  ${({ style }) =>
    style &&
    css`
      width: ${style.width || '161px'};
      height: ${style.height || '46px'};
    `}

  border-radius: ${({ shape }) => (shape === 'square' ? '8px' : '200px')};

  &:hover {
    border: 1.5px solid;
    border-color: ${({ btnColor }) => (btnColor === 'soft' ? SoftButtonStyle.border : DeepButtonStyle.border)};
    opacity: ${props => (props.disabled ? '0.5' : '1.0')};
  }

  &:active {
    border: 1px solid;
    border-color: ${({ btnColor }) => (btnColor === 'soft' ? SoftButtonStyle.border : DeepButtonStyle.border)};
    background-color: ${({ btnColor }) => (btnColor === 'soft' ? SoftButtonStyle.pressed : DeepButtonStyle.pressed)};
  }
`;

function Button({
  children,
  imgSrc,
  onClick,
  pagePath,
  disabled,
  shape = 'square',
  btnColor,
  style = {},
  type = 'button',
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && pagePath) {
      if (onClick) {
        onClick();
      }
      navigate(pagePath);
    }
  };

  const btnColorDefault = btnColor || 'soft';

  return (
    <StyledButton
      btnColor={btnColorDefault}
      onClick={handleClick}
      disabled={disabled}
      shape={shape}
      style={style}
      type={type}>
      {children}
      {imgSrc && <img src={imgSrc} alt="화살표" />}
    </StyledButton>
  );
}

export default Button;
