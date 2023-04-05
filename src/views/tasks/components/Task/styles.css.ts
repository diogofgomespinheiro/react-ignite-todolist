import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/styles/theme.css';

import { TaskStatus } from './types';

export const taskContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '0.75rem',
  padding: '1rem',
  background: theme.colors.gray500,
  border: `1px solid ${theme.colors.gray400}`,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
  borderRadius: '8px',
});

export const textContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '0.75rem',
  flex: 1,
});

export const text = recipe({
  base: {
    flex: 1,
  },
  variants: {
    status: {
      [TaskStatus.TODO]: {
        color: theme.colors.gray100,
        textDecoration: 'none',
      },
      [TaskStatus.COMPLETED]: {
        color: theme.colors.gray300,
        textDecoration: 'line-through',
      },
    },
  },
  defaultVariants: {
    status: TaskStatus.TODO,
  },
});
