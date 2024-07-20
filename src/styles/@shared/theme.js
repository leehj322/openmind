const light = {
  bgColor: 'var(--gray20)',

  gray10: 'var(--gray10)', //흰색 '#ffffff'
  gray20: 'var(--gray20)',
  gray30: 'var(--gray30)',
  gray40: 'var(--gray40)',
  gray50: 'var(--gray50)',
  gray60: 'var(--gray60)', // 검정색 '#000000'

  brown10: 'var(--brown10)',
  brown20: 'var(--brown20)',
  brown30: 'var(--brown30)',
  brown40: 'var(--brown40)',
  brown50: 'var(--brown50)',

  blue: 'var(--blue)',
  yellow: 'var(--yellow)',
  red: 'var(--red)',

  blueFilter: 'invert(47%) sepia(95%) saturate(4530%) hue-rotate(202deg) brightness(97%) contrast(95%)',
  redFilter:
    'brightness(0) saturate(100%) invert(27%) sepia(26%) saturate(3214%) hue-rotate(330deg) brightness(103%) contrast(101%)',

  gray60Filter: 'invert(0%) sepia(7%) saturate(30%) hue-rotate(322deg) brightness(88%) contrast(106%)',
  gray50Filter: 'invert(30%) sepia(1%) saturate(0%) hue-rotate(159deg) brightness(102%) contrast(95%)',
};

const dark = {
  // bgColor: '#343737', //기존 다크 컬러
  bgColor: '#0d1116', // 깃허브 다크모드 컬러

  gray10: '#333333',
  gray20: '#999999',
  gray30: '#777777',
  gray40: '#818181',
  gray50: '#515151',
  gray60: '#f9f9f9',

  brown10: '#e4d5c9',
  brown20: '#c7bbb5',
  brown30: '#998675',
  brown40: '#B38B6D',
  brown50: '#f5f1ee',

  blue: 'var(--blue)',
  yellow: 'var(--yellow)',
  red: 'var(--red)',

  blueFilter: 'invert(47%) sepia(95%) saturate(4530%) hue-rotate(202deg) brightness(97%) contrast(95%)',
  redFilter:
    'brightness(0) saturate(100%) invert(27%) sepia(26%) saturate(3214%) hue-rotate(330deg) brightness(103%) contrast(101%)',

  gray50Filter:
    'brightness(0) saturate(100%) invert(30%) sepia(4%) saturate(19%) hue-rotate(11deg) brightness(94%) contrast(85%);',
  gray60Filter:
    'brightness(0) saturate(100%) invert(100%) sepia(20%) saturate(7458%) hue-rotate(179deg) brightness(110%) contrast(111%)',
};

const theme = {
  light,
  dark,
};

export default theme;
