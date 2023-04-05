import * as React from 'react';
import classnames from 'classnames';

import { Input } from '@/components/atoms';
import { CreateButton } from '../CreateButton';

import * as styles from './styles.css';

interface Props {
  className?: string;
  onCreateTask: (value: string) => void;
}

const CreateTaskForm = ({
  className,
  onCreateTask,
}: Props): React.ReactElement => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const taskValue = formData.get('task');
    if (!taskValue) return;

    onCreateTask(String(taskValue));
    form.reset();
  }

  return (
    <form
      className={classnames(styles.container, className)}
      onSubmit={handleSubmit}
    >
      <Input
        id='task'
        name='task'
        className={styles.input}
        type='text'
        placeholder='Adicione uma nova tarefa'
      />
      <CreateButton />
    </form>
  );
};

export { CreateTaskForm };
