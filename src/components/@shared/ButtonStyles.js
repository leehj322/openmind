import styled from 'styled-components';
import { light, dark } from '../../styles/@shared/theme';

export const LightBrownButton = styled.button`
  background-color: ${light.buttonPrimary};
  color: ${light.fontSecondary};
  width: 195px;
  height: 46px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;

  border-radius: ${props => (props.shape === 'square' ? '8px' : '200px')};

  &:hover {
    border: 1px solid;
    border-color: ${light.borderBrown};
    opacity: ${props => (props.disabled ? '0.5' : '0.8')};
  }

  &:active {
    border: 1px solid;
    border-color: ${light.borderBrown};
    background-color: ${light.buttonPrimaryPressed};
  }
`;

export const DarkBrownButton = styled.button`
  background-color: ${dark.buttonPrimary};
  color: ${dark.fontSecondary};
  width: 195px;
  height: 46px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;

  border-radius: ${props => (props.shape === 'square' ? '8px' : '200px')};

  &:hover {
    border: 1px solid;
    border-color: ${dark.borderBrown};
    opacity: ${props => (props.disabled ? '0.5' : '0.8')};
  }

  &:active {
    border: 1px solid;
    border-color: ${dark.borderBrown};
    background-color: ${dark.buttonPrimaryPressed};
  }
`;

//화살표 이미지
export const LightArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const DarkArrowImg = styled.img`
  width: 18px;
  height: 18px;
`;
