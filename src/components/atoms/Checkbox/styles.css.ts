import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/styles/theme.css';

export const wrapper = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1.125rem',
    width: '1.125rem',
    borderRadius: '9999px',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s ease-in-out, border-color 0.15s ease-in-out',
  },
  variants: {
    isChecked: {
      true: {
        border: `0.15rem solid ${theme.colors.purple}`,
        background: theme.colors.purple,
        ':hover': {
          border: `0.15rem solid ${theme.colors.purpleDark100}`,
          background: theme.colors.purpleDark100,
        },
      },
      false: {
        border: `0.15rem solid ${theme.colors.blue}`,
        ':hover': {
          background: theme.colors.blueDark20,
          borderColor: theme.colors.blueDark100,
        },
      },
    },
  },
  defaultVariants: {
    isChecked: false,
  },
});

export const checkbox = style({
  appearance: 'none',
  WebkitAppearance: 'none',
  position: 'absolute',
  height: '100%',
  width: '100%',
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
    boxShadow: 'none',
  },
});

export const checkmark = recipe({
  base: {
    transition: 'visibility 0.1s ease-in-out',
  },
  variants: {
    isChecked: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },
  defaultVariants: {
    isChecked: false,
  },
});
