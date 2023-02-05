import * as React from 'react';

import { PlusIcon } from '@/components/icons';

import styles from './styles.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CreateButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.container} {...props}>
      <span>
        {children} <PlusIcon />
      </span>
    </button>
  );
};

export { CreateButton };
