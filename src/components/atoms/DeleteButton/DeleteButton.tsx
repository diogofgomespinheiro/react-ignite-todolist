import * as React from 'react';

import { TrashIcon } from '@/components/icons';

import styles from './styles.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const DeleteButton = (props: Props) => {
  return (
    <button className={styles.button} {...props}>
      <TrashIcon className={styles.icon} />
    </button>
  );
};

export { DeleteButton };
