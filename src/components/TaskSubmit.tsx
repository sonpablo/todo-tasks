
import useTasks from 'hooks/useTasks';
import React, { useRef, useState } from 'react';
import { addTask } from 'reducers/task/taskAction';
import './TaskSubmit.css';

type formElement = React.FormEvent<HTMLFormElement>;

export default function TaskSubmit(): JSX.Element {

    const [taskName, setTaskName] = useState<string>('')
    const { dispatch } = useTasks()
    const taskInput = useRef<HTMLInputElement>(null)

    const onChangeTaskInput = (value: string): void => {
        setTaskName(value)
    }

    const handleSubmit = (e: formElement): void => {
        e.preventDefault()

        taskInput.current?.focus()

        if (!taskName) return
        dispatch(addTask(taskName))

        setTaskName('')

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