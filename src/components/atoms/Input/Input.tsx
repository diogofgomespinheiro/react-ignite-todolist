import * as React from 'react';
import classnames from 'classnames';

import * as styles from './styles.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: Props): React.ReactElement<Props> => {
  return <input className={classnames(styles.input, className)} {...props} />;
};

export { Input };
