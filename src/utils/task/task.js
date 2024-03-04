import React from "react";
import deleteIcon from '../../delete.png';
import './task.css';

const Task = (cutie) => {
    return (
        <div className="task">
            <input checked={cutie.cariocaMea.isDone} type="checkbox" />
            <span>{cutie.cariocaMea.description}</span>
            <img src={deleteIcon} alt='title'/>
        </div>
    );
}

export default Task;

