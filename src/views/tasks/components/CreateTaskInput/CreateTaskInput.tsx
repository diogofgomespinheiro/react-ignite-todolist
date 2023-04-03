import * as React from 'react';
import classnames from 'classnames';

import { Input } from '@/components/atoms';
import { CreateButton } from '../CreateButton';

import * as styles from './styles.css';

interface Props {
  className?: string;
}

const CreateTaskInput = ({ className }: Props): React.ReactElement => {
  return (
    <div className={classnames(styles.container, className)}>
      <Input
        className={styles.input}
        type='text'
        placeholder='Adicione uma nova tarefa'
      />
      <CreateButton />
    </div>
  );
};

export { CreateTaskInput };
