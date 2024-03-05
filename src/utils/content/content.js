import { useState } from 'react';
import Task from '../task/task';
import './content.css';
import saveIcon from '../../check.png';

const Content = () => {
    const [showForm, setShowForm] = useState(false);
    const [listOfTasks, setListOfTasks] = useState([
        {
            id: 1,
            description: 'Roz',
            isDone: false
        },
        {
            id: 2,
            description: 'Verde',
            isDone: true
        },
        {
            id: 3,
            description: 'Galben',
            isDone: false
        }
    ])

    const openTaskForm = () => {
        setShowForm(!showForm)
    }

    return (
        <div>
            <div className='content'>
                <div className='activity-list'>
                    {listOfTasks.map(carioca => (
                        <Task cariocaMea={carioca} />
                    ))}
                </div>
            </div>

            <div className='task-generator'>
                <div className='button' onClick={openTaskForm}>{
                    showForm ? 'Close Form' : '+ New Task'
                }</div>

                {showForm ? (
                    <div className='tasks-bar'>
                        <input className='typing-task' />
                        <img src={saveIcon} />
                    </div>
                ) : ''}
            </div>
        </div>
    )
}


export default Content;



