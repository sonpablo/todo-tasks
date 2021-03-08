import { Task } from 'models/Task';
import React, { createContext, useReducer } from 'react';
import { Action } from 'reducers/task/taskAction';
import { reducer } from 'reducers/task/taskReducer';

export interface ITasksContext {
    state: Task[];
    dispatch: React.Dispatch<Action>;
}

export const context = createContext<ITasksContext>({
    state: [],
    dispatch: () => null
});

interface Props {
    children: React.ReactNode
}

export const TasksProvider: React.FC<Props> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    )
}
