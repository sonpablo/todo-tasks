import { context, ITasksContext } from 'context/TasksContext'
import { useContext } from 'react'


export default function useTasksContext(): ITasksContext {

    const { state, dispatch } = useContext<ITasksContext>(context)

    return { state, dispatch }


}