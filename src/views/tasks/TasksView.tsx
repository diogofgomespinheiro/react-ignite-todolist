import * as React from 'react';

import { Layout } from '@/layouts';
import { CreateTaskForm, Task, TaskStatus, type ITask } from './components';

import * as styles from './styles.css';

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

  function handleToogleTask(toogleTask: ITask): void {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== toogleTask.id) return task;

        return {
          ...task,
          status:
            task.status === TaskStatus.TODO
              ? TaskStatus.COMPLETED
              : TaskStatus.TODO,
        };
      })
    );
  }

  function handleDeleteTask(taskToDelete: ITask): void {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
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
            <Task
              key={task.id}
              taskData={task}
              onDeleteTask={handleDeleteTask}
              onToogleTask={handleToogleTask}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { TasksView };
