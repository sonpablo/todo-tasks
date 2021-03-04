import useTasks from 'hooks/useTasks'
import { Task } from 'models/Task'
import React from 'react'

export default function ListOfTasks(): JSX.Element {

    const { tasks } = useTasks()

    const renderTasks = (): JSX.Element[] => {
        return tasks.map((task: Task) => {
            return <div key={task.id}>
                <h2 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</h2>
                <h3>{task.id}</h3>
            </div>
        })
    }

    return (
        <>
            { renderTasks()}
        </>
    )
}
