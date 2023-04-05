import * as React from 'react';

import { Layout } from '@/layouts';
import { CreateTaskForm } from './components';

import * as styles from './styles.css';

enum TaskStatus {
  TODO = 'TODO',
  COMPLETED = 'COMPLETED',
}

interface ITask {
  id: string;
  text: string;
  status: TaskStatus;
}

const TasksView = (): React.ReactElement => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === TaskStatus.COMPLETED
  ).length;

  function handleCreateTask(value: string): void {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), text: value, status: TaskStatus.TODO },
    ]);
  }

  return (
    <Layout>
      <CreateTaskForm
        className={styles.createTaskContainer}
        onCreateTask={handleCreateTask}
      />
      <div className={styles.tasksContainer}>
        <div className={styles.tasksHeader}>
          <div className={styles.headerText()}>
            Tarefas criadas
            <span className={styles.headerPill}>{totalTasks}</span>
          </div>
          <div className={styles.headerText({ variant: 'secondary' })}>
            Concluidas
            <span className={styles.headerPill}>
              {completedTasks} de {totalTasks}
            </span>
          </div>
        </div>
        <div className={styles.tasksContent}>
          {tasks.map((task) => (
            <div key={task.id}>{task.text}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { TasksView };
