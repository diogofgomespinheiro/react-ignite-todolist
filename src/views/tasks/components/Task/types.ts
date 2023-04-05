export enum TaskStatus {
  TODO = 'TODO',
  COMPLETED = 'COMPLETED',
}

export interface ITask {
  id: string;
  text: string;
  status: TaskStatus;
}
