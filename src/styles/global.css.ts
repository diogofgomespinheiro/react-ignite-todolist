import { globalStyle } from '@vanilla-extract/css';
import { theme } from '@/styles/theme.css';

globalStyle('*', {
  color: 'inherit',
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('*::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle(':focus', {
  outline: 'transparent',
  boxShadow: `0 0 0 1px ${theme.colors.purpleDark}`,
});

globalStyle('html, body, #root', {
  height: '100%',
  minHeight: '100%',
});

globalStyle('body', {
  color: theme.colors.gray100,
  background: theme.colors.gray600,
  lineHeight: theme.lineHeights.base,
  WebkitFontSmoothing: 'antialiased',
  fontFamily: theme.fonts.body,
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes.base,
});

globalStyle('#root', {
  isolation: 'isolate',
});

globalStyle('input, textarea, button, select', {
  font: 'inherit',
});

globalStyle('ul', {
  padding: 0,
  listStyleType: 'none',
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('input', {
  border: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});
