import Task from 'components/Task'
import useTasks from 'hooks/useTasks'
import { Task as TaskType } from 'models/Task'
import React from 'react'

export default function ListOfTasks(): JSX.Element {

    const { state } = useTasks()

    const renderTasks = (): JSX.Element[] => {
        return state.map((task: TaskType) => {
            return <Task key={task.id} task={task} />
        })
    }

    return (
        <>
            { renderTasks()}
        </>
    )
}
