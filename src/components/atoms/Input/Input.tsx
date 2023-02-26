import * as React from 'react';

import * as styles from './styles.css';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props): React.ReactElement<HTMLInputElement> => {
  return <input className={styles.input} {...props} />;
};

export { Input };
