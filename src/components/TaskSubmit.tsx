import React, { useRef, useState } from 'react'
//import { Task } from 'models/Task';
//import { v4 as uuidv4 } from 'uuid';
import './TaskSubmit.css'

type formElement = React.FormEvent<HTMLFormElement>;

export default function TaskSubmit(): JSX.Element {

    const [taskName, setTaskName] = useState<string>('')
    const taskInput = useRef<HTMLInputElement>(null)


    const onChangeTaskInput = (value: string): void => {
        setTaskName(value)
    }

    const handleSubmit = (e: formElement): void => {
        e.preventDefault()

        setTaskName('')
        taskInput.current?.focus()
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