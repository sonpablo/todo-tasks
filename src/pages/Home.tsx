import ListOfTasks from 'components/ListOfTasks'
import TaskSubmit from 'components/TaskSubmit'
import React from 'react'
import './Home.css'

export default function Home(): JSX.Element {

    return (
        <div className='home-container'>
            <TaskSubmit />
            <ListOfTasks />
        </div>
    )
}