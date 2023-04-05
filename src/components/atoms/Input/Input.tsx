import * as React from 'react';
import classnames from 'classnames';

import * as styles from './styles.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }: Props, ref): React.ReactElement<Props> => {
    return (
      <input
        className={classnames(styles.input, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
export { Input };
