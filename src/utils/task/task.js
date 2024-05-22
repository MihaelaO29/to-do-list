import './task.css';
import deleteIcon from '../../images/delete.png';

const Task = (props) => {

    return (
        <div key={props.allTasks.id} className="task"> 
             <div className="task_element"> 
             <input className="checkbox" type="checkbox" />
             <span key={'description' + props.allTasks.id}>{props.allTasks.description}</span>
             </div>
            <div className="task_element"> <img className='delete' onClick={() => props.deleteTask(props.allTasks.id)} src={deleteIcon} alt='delete' />
            </div>
        </div>
    );
}

export default Task;

