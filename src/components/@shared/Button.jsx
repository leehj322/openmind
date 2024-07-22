import { softButtonStyle, deepButtonStyle, ArrowImg } from './ButtonStyles';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

/**
 * 버튼 컴포넌트입니다.
 * @param {object} props - 컴포넌트 속성
 * @param {string} [props.imgSrc] - 버튼 내부 이미지 경로
 * @param {function} [props.onClick] - 클릭 이벤트 핸들러
 * @param {string} [props.pagePath] - 클릭 시 이동할 페이지 경로
 * @param {boolean} [props.disabled='false'] - 버튼 비활성화 여부
 * @param {'square' | 'pill'} [props.shape='square'] - 버튼 모양
 * @param {'soft' | 'deep'} [props.btncolor='soft'] - 버튼 색상 테마
 * @param {object} [props.style={}] - 추가적인 스타일 객체
 * @param {string} [props.width='161px'] - 버튼 너비
 * @param {string} [props.height='46px'] - 버튼 높이
 * @param {string} [props.type='button'] - 버튼의 타입
 * @returns {JSX.Element} 스타일된 버튼 JSX 엘리먼트
 */

const StyledButton = styled.button.attrs(({ btncolor, ...rest }) => ({
  // `btncolor`를 제외한 나머지 속성만 전달
  ...rest,
}))`
  background-color: ${({ btncolor }) =>
    btncolor === 'soft' ? softButtonStyle.background : deepButtonStyle.background};
  color: ${({ btncolor }) => (btncolor === 'soft' ? softButtonStyle.text : deepButtonStyle.text)};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  width: ${({ width }) => width || '161px'};
  height: ${({ height }) => height || '46px'};

  border-radius: ${({ shape }) => (shape === 'square' ? '8px' : '200px')};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

  &:hover {
    border: 1.5px solid;
    border-color: ${({ btncolor }) => (btncolor === 'soft' ? softButtonStyle.border : deepButtonStyle.border)};
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1.0')};
  }

  &:active {
    border: 1px solid;
    border-color: ${({ btncolor }) => (btncolor === 'soft' ? softButtonStyle.border : deepButtonStyle.border)};
    background-color: ${({ btncolor }) => (btncolor === 'soft' ? softButtonStyle.pressed : deepButtonStyle.pressed)};
  }

  ${({ $style }) => $style}
`;

function Button({
  children,
  imgSrc,
  onClick,
  pagePath,
  disabled,
  shape = 'square',
  btncolor,
  width,
  height,
  type = 'button',
  style = {},
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!disabled) {
      if (onClick) {
        onClick();
      }
      if (pagePath) {
        navigate(pagePath);
      }
    }
  };

  const btncolorDefault = btncolor || 'soft';

  return (
    <StyledButton
      width={width}
      height={height}
      btncolor={btncolorDefault}
      onClick={handleClick}
      disabled={disabled}
      shape={shape}
      type={type}
      $style={style}>
      {children}
      {imgSrc && <ArrowImg src={imgSrc} alt="화살표" />}
    </StyledButton>
  );
}

export default Button;
