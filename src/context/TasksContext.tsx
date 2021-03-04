import { Task } from 'models/Task'
import React, { createContext, useState } from 'react'
import { TodoContextState } from 'types/TodoContextState'

const context = createContext<TodoContextState>({} as TodoContextState)

export function TasksContext(param: { children: JSX.Element }) {

    const [tasks, setTasks] = useState<Task[]>([])

    return <context.Provider value={{ tasks, setTasks }}>
        {param.children}
    </context.Provider>
}

export default context;