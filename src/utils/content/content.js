import { useState } from 'react';
import Task from '../task/task';
import './content.css';
import check from '../../images/check.png';


const Content = () => {
    const [showForm, setShowForm] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
    const [count, setCount] = useState(1);
    const [listOfTasks, setListOfTasks] = useState([]);

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
                    {listOfTasks.map(task => (
                        <Task allTasks={task} deleteTask={deleteTask} />
                    ))}
                </div>
            </div>

            <div className='task_generator_bar'>
                <div className='task-generator'>
                    <div className='button_task' onClick={openTaskForm}>{
                        showForm ? 'Close Form' :
                            <> New Task </>
                    }</div>

                    {showForm ? (
                        <div className='tasks-bar'>
                            <input onChange={onUserInput} className='typing-task' />
                            <img className='saveTask' onClick={saveTask} src={check} alt='check_image' />
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}


export default Content;



