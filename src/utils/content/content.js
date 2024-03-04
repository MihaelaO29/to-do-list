import Task from '../task/task';
import './content.css';

const Content = () => {
    return (
        <div className='content'>
            <div className='activity-list'>
                <Task />
                <Task />
                <Task />
            </div>
            <div className='button'> + New Task</div>
        </div>
    )
}


export default Content;