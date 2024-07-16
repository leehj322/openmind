import { LightBrownButton, DarkBrownButton, LightArrowImg, DarkArrowImg } from './ButtonStyles';
//import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { light, dark } from '../../styles/@shared/theme';

function Button({ children, imgSrc, onClick, to, disabled, shape, theme }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled && to) {
      if (onClick) {
        onClick();
      }
      navigate(to);
    }
  };

  const ButtonComponent = theme === 'light' ? LightBrownButton : DarkBrownButton;

  return (
    <ButtonComponent onClick={handleClick} disabled={disabled} shape={shape}>
      {children}
      {imgSrc && <img src={imgSrc} alt="화살표" />}
    </ButtonComponent>
  );
}

export default Button;
