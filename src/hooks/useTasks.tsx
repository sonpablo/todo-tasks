import Context from 'context/TasksContext'
import { useContext } from 'react'
import { TodoContextState } from 'types/TodoContextState'

export default function useTasks(): TodoContextState {
    const { tasks, setTasks } = useContext<TodoContextState>(Context)

    return { tasks, setTasks }
}