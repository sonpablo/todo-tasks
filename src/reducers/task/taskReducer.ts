import { Task } from "models/Task";

import { Action, ActionTypes } from "reducers/task/taskAction";
import { v4 as uuidv4 } from "uuid";

export const reducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      const task: Task = {
        id: uuidv4(),
        name: action.payload,
        done: false,
      };
      return [...state, task];

    case ActionTypes.DONE:
      const newState: Task[] = state.map((t: Task) => {
        let taskSpreaded = { ...t };
        if (taskSpreaded.id === action.payload)
          taskSpreaded.done = !taskSpreaded.done;

        return taskSpreaded;
      });
      return newState;

    case ActionTypes.REMOVE:
      return state.filter((t: Task) => t.id !== action.payload);
    default:
      return state;
  }
};
