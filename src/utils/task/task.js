import React from "react";
import deleteIcon from '../../delete.png';
import './task.css';

const Task = () => {
    return (
        <div className="task">
            <input type="checkbox" />
            <span>Task 1</span>
            <img src={deleteIcon} alt='title'/>
        </div>
    );
}

export default Task;