import * as React from 'react';

import { Layout } from '@/layouts';
import { CreateTaskInput } from './components';

import * as styles from './styles.css';

const TasksView = (): React.ReactElement => (
  <Layout>
    <CreateTaskInput className={styles.createTaskContainer} />
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <div className={styles.headerText()}>
          Tarefas criadas <span className={styles.headerPill}>5</span>
        </div>
        <div className={styles.headerText({ variant: 'secondary' })}>
          Concluidas <span className={styles.headerPill}>2 de 5</span>
        </div>
      </div>
      <div className={styles.tasksContent}></div>
    </div>
  </Layout>
);

export { TasksView };
