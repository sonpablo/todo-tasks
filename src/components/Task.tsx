import useTasks from 'hooks/useTasks';
import { Task as TaskType } from 'models/Task';
import React from 'react';
import { doneTask, removeTask } from 'reducers/task/taskAction';

interface Props {
    task: TaskType
}

const Task: React.FC<Props> = ({ task }): JSX.Element => {

    const { dispatch } = useTasks()

    const onRemoveTask = (id: string): void => {
        dispatch(removeTask(id))
    }

    const toggleDoneTask = (id: string): void => {
        dispatch(doneTask(id))
    }

    return (
        <div >
            <h2 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h2>
            <h3>{task.id}</h3>
            <button onClick={() => toggleDoneTask(task.id)}>{task.done ? '✗' : '✔'}</button>
            <button onClick={() => onRemoveTask(task.id)}>🗑</button>
        </div>
    )
}

export default Task;