import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/styles/theme.css';

export const button = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.bold,
    cursor: 'pointer',
    transition: 'background 0.1s ease-in-out, color 0.1s ease-in-out',
    border: 'none',
  },
  variants: {
    variant: {
      primary: {
        color: theme.colors.gray100,
        background: theme.colors.blueDark100,
        ':hover': {
          background: theme.colors.blue,
        },
      },
      danger: {
        color: theme.colors.gray300,
        background: theme.colors.transparent,
        ':hover': {
          color: theme.colors.danger,
          background: theme.colors.gray400,
        },
      },
    },
    size: {
      small: { padding: '0.375rem', borderRadius: '4px' },
      medium: { padding: '1rem', borderRadius: '8px' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
