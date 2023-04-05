import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/styles/theme.css';

export const createTaskContainer = style({
  width: '100%',
  transform: 'translateY(-50%)',
});

export const tasksContainer = style({
  width: '100%',
});

export const tasksHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '1.5rem',
});

export const headerText = recipe({
  base: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.bold,
  },
  variants: {
    variant: {
      primary: {
        color: theme.colors.blue,
      },
      secondary: {
        color: theme.colors.purple,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const headerPill = style({
  background: theme.colors.gray400,
  padding: '0.125rem 0.5rem',
  borderRadius: '9999px',
  fontSize: theme.fontSizes.xs,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.gray200,
});

export const tasksContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  width: '100%',
  padding: '0 0 1.5rem 0',
});
