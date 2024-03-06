import { useState } from 'react';
import Task from '../task/task';
import './content.css';
import saveIcon from '../../check.png';

const Content = () => {
    const [showForm, setShowForm] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
    const [count, setCount] = useState(1);
    const [listOfTasks, setListOfTasks] = useState([])

    const openTaskForm = () => {
        setShowForm(!showForm)
    }

    const onUserInput = (event) => {
        setTaskDescription(event.target.value)
    }

    const saveTask = () => {
        const newTask = {
            id: count,
            description: taskDescription,
            isDone: false
        };
        setCount(count + 1);
        setListOfTasks([...listOfTasks, newTask]);
        openTaskForm();
        setTaskDescription('');
    }

    const deleteTask = (id) => {
        const filterTask = listOfTasks.filter(task => task.id !== id)
        setListOfTasks(filterTask)
    }

    return (
        <div key={'content-container'}>
            <div key={'content'} className='content'>
                <div key={'activity'} className='activity-list'>
                    {listOfTasks.map(carioca => (
                        <Task cariocaMea={carioca} deleteTask={deleteTask} />
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



