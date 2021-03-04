import useTasks from 'hooks/useTasks';
import { Task } from 'models/Task';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TaskSubmit.css';

type formElement = React.FormEvent<HTMLFormElement>;

export default function TaskSubmit(): JSX.Element {

    const [taskName, setTaskName] = useState<string>('')
    const { tasks, setTasks } = useTasks()

    const taskInput = useRef<HTMLInputElement>(null)


    const onChangeTaskInput = (value: string): void => {
        setTaskName(value)
    }

    const handleSubmit = (e: formElement): void => {
        e.preventDefault()

        addTask(taskName)

        setTaskName('')
        taskInput.current?.focus()
    }

    const addTask = (name: string): void => {
        const newTasks: Task[] = [...tasks].concat({ id: uuidv4(), name: name, done: false })
        setTasks(newTasks)
    }

    return (
        <form className='container-form'
            onSubmit={handleSubmit}>
            <input autoFocus
                className='task-input'
                onChange={e => onChangeTaskInput(e.target.value)}
                ref={taskInput}
                type='text'
                value={taskName} />
            <br />
            <button className='button-submit' >Add task</button>
        </form>
    )
}