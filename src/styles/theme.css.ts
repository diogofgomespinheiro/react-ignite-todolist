import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  colors: {
    transparent: 'transparent',
    purple: '#8284fa',
    purpleDark: '#5e60ce',
    blue: '#4ea8de',
    blueDark: '#1e6f9f',
    gray100: '#f2f2f2',
    gray200: '#d9d9d9',
    gray300: '#808080',
    gray400: '#333333',
    gray500: '#262626',
    gray600: '#1a1a1a',
    gray700: '#0d0d0d',
    danger: '#e25858',
  },
  fonts: {
    body: '"Inter", sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeights: {
    xs: '1',
    sm: '1.25',
    base: '1.5',
    md: '1.5',
    lg: '1.75',
    xl: '1.75',
    '2xl': '2',
    '3xl': '2.25',
    '4xl': '2.5',
    '5xl': '1',
    '6xl': '1',
    '7xl': '1',
    '8xl': '1',
    '9xl': '1',
  },
});