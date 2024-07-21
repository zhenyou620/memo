export interface TaskType {
  id: number;
  text: string;
  isArchived?: boolean;
  isPinned?: boolean;
}

export type TasksType = TaskType[];
