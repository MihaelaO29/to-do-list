import { useState } from 'react';
import Task from '../task/task';
import './content.css';
import saveIcon from '../../check.png';

const Content = () => {
    const [paharCuCarioci, setCutiaCuCarioci] = useState([
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
    const [showForm, setShowForm] = useState(false);

    const openTaskForm = () => {
        setShowForm(!showForm)
    }

    return (
        <div className='content'>
            <div className='activity-list'>
                {paharCuCarioci.map(carioca => (
                    <Task cariocaMea={carioca} />
                ))}
                {showForm ? (
                <div className='tasks-generator'>
                    <input className='typing-task' />
                    <img src={saveIcon} />
                </div>
                ) : ''}
            </div>
            <div className='button' onClick={openTaskForm}>{
                showForm ? 'Close Form' : '+ New Task'
            }</div>
        </div>
    )
}


export default Content;