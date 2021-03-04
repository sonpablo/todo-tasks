import React from 'react'
import { Task as ITask } from 'models/Task';

export default function Task(task: ITask): JSX.Element {

    const toggleDoneTask = (id: string): void => {

    }


    const removeTask = (id: string): void => {

    }

    return (
        <div >
            <h2 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h2>
            <h3>{task.id}</h3>
            <button onClick={() => toggleDoneTask(task.id)}>{task.done ? '✗' : '✔'}</button>
            <button onClick={() => removeTask(task.id)}>🗑</button>
        </div>
    )
}