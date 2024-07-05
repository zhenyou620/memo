export interface Task {
  id: number;
  text: string;
  isArchived?: boolean;
  isPinned?: boolean;
}

export type Tasks = Task[];
