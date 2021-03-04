import React from 'react'
import ListOfTasks from 'components/ListOfTasks'
import TaskSubmit from 'components/TaskSubmit'
import './Home.css'

export default function Home(): JSX.Element {

    return (
        <div className='home-container'>
            <TaskSubmit />
            <ListOfTasks />
        </div>
    )
}