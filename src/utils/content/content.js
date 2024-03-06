import { useState } from 'react';
import Task from '../task/task';
import './content.css';
import saveIcon from '../../check.png';

const Content = () => {
    const [showForm, setShowForm] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
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

    const onUserInput = (event) => {
        setTaskDescription(event.target.value)
    }

    const saveTask = () => {
        const newTask = {
            id: 4,
            description: taskDescription,
            isDone: false
        };
        setListOfTasks([...listOfTasks, newTask])
        openTaskForm()
        setTaskDescription('')
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
                        <input onChange={onUserInput} className='typing-task' />
                        <img onClick={saveTask} src={saveIcon} />
                    </div>
                ) : ''}
            </div>
        </div>
    )
}


export default Content;



