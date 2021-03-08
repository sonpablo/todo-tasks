export enum ActionTypes {
  ADD = "add",
  DONE = "done",
  REMOVE = "remove",
}

export type Action = {
  type: ActionTypes;
  payload: string;
};

export const addTask = (name: string): Action => {
  return {
    type: ActionTypes.ADD,
    payload: name,
  };
};

export const doneTask = (id: string): Action => {
  return {
    type: ActionTypes.DONE,
    payload: id,
  };
};

export const removeTask = (id: string): Action => {
  return {
    type: ActionTypes.REMOVE,
    payload: id,
  };
};
