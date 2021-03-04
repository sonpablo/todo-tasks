import { Task } from "models/Task";

export type TodoContextState = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
};
