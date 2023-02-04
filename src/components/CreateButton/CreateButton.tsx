import * as React from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CreateButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.container} {...props}>
      <span>
        {children} <PlusCircle size={16} />
      </span>
    </button>
  );
};

export { CreateButton };
