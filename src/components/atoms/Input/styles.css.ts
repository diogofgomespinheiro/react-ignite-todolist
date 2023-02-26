import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const input = style({
  padding: '1rem',
  color: theme.colors.gray100,
  background: theme.colors.gray500,
  borderRadius: '8px',
  boxShadow: `0 0 0 1px ${theme.colors.gray700}`,
  selectors: {
    '&::placeholder': {
      color: theme.colors.gray300,
    },
  },
});
