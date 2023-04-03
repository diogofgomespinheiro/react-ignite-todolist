import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const input = style({
  flex: 1,
  width: '100%',
});
