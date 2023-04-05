import * as React from 'react';

import { TrashIcon } from '@/components/icons';
import { Button, Checkbox } from '@/components/atoms';

import { type ITask } from './types';
import * as styles from './styles.css';

interface Props {
  taskData: ITask;
  onToogleTask: (task: ITask) => void;
  onDeleteTask: (task: ITask) => void;
}

const Task = ({
  taskData,
  onDeleteTask,
  onToogleTask,
}: Props): React.ReactElement => {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.textContainer}>
        <Checkbox
          onChange={() => {
            onToogleTask(taskData);
          }}
        />
        <span className={styles.text({ status: taskData.status })}>
          {taskData.text}
        </span>
      </div>
      <Button
        variant='danger'
        size='small'
        onClick={() => {
          onDeleteTask(taskData);
        }}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export { Task };
