import * as React from 'react';

import * as styles from './styles.css';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props): React.ReactElement<Props> => {
  return <input className={styles.input} {...props} />;
};

export { Input };
