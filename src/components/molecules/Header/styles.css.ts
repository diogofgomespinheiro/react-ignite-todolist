import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '5rem 0',
  background: theme.colors.gray700,
});
