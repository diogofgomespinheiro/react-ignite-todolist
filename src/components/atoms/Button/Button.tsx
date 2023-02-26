import * as React from 'react';
import classnames from 'classnames';

import * as styles from './styles.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
  size?: 'small' | 'medium';
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  ...props
}: Props): React.ReactElement<HTMLButtonElement> => {
  return (
    <button
      className={classnames(styles.button({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
