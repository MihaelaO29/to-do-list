import './task.css';
import deleteIcon from '../../images/delete.png';

const Task = (props) => {

    return (
        <div key={props.allTasks.id} className="task">
            <div className="task_element"> <input className="checkbox" type="checkbox" /> </div>
            <div className="task_element"> <span key={'description' + props.allTasks.id}>{props.allTasks.description}</span></div>
            <div className="task_element"> <img onClick={() => props.deleteTask(props.allTasks.id)} src={deleteIcon} alt='title' /></div>
        </div>
    );
}

export default Task;

