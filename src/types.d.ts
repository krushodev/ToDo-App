export interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TaskList {
  id: string;
  name: string;
  icon: string;
  tasks: Task[];
  totalTasks: number;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  profilePhoto: string;
}
