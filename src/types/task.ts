export interface SimpleTask {
  name: string;
  isCompleted: boolean;
}

export enum TaskDifficulty {
  EASY,
  MEDIUM,
  HARD,
}

export enum TaskRepetitiveness {
  DAY,
  OTHER_DAY,
  WEEK,
  MONTH,
}

export interface Task extends SimpleTask {
  date: Date;
  difficulty: TaskDifficulty;
  repeat: TaskRepetitiveness;
  notification: number;
  tags: string[];
  subtasks: SimpleTask[];
  description: string;
  comment: {
    date: Date;
    text: string;
  };
  id: number;
}

export interface AuthStore {
  tasks: Task[];
  nextId: number;
}

export const initialState: AuthStore = {
  tasks: [],
  nextId: 0,
};

export type AddTaskAction = Omit<Task, 'id'>;

export interface DeleteTaskAction {
  id: number;
}

export interface EditTaskAction extends Partial<Task> {
  id: number;
}
