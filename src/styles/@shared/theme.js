const windowSize = {
  desktop: 'screen and (min-width: 1200px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1199px)',
  mobile: 'screen and (min-width: 375px) and (max-width: 767px)',
};

const fontSize = {
  large: '20px',
  medium: '18px',
  small: '16px',
  xsmall: '14px',
};

const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
};

export const light = {
  background: 'var(--gray20)',
  fontPrimary: 'var(--gray60)',
  fontSecondary: 'var(--brown40)',
  hoverBlue: 'var(--blue)',
  buttonPrimary: 'var(--brown10)',
  //buttonSecondary: 'var(--brown20)',
  buttonPrimaryPressed: 'var(--brown20)',
  //buttonSecondaryPressed: 'var(--brown20)',
  borderBrown: 'var(--brown40)',
  //BorderGray: 'var(--gray40)',
  buttonInactiveOpacity: '0.4',
  buttonInactive: 'var(--brown30)',
};

// light랑 똑같이 두었는데, 구현 시에 색상만 바꾸면 됨
export const dark = {
  background: 'var(--gray20)',
  fontPrimary: 'var(--gray60)',
  fontSecondary: 'var(gray10)',
  hoverBlue: 'var(--blue)',
  buttonPrimary: 'var(--brown40)',
  //buttonSecondary: 'var(--brown10)',
  buttonPrimaryPressed: 'var(--brown50)',
  //buttonSecondaryPressed: 'var(--brown20)',
  BorderBrown: 'var(--brown40)',
  //BorderGray: 'var(--gray40)',
  ButtonInactiveOpacity: '0.4',
  ButtonInactive: 'var(--brown30)',
};

const settings = {
  windowSize,
  fontSize,
  fontWeight,
};

const modes = {
  light,
  dark,
};

const theme = {
  settings,
  modes,
};

export default theme;
