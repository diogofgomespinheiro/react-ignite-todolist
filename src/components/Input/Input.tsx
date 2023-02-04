import * as React from 'react';

import styles from './styles.module.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};

export { Input };
