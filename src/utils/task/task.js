import React, { useState } from "react";
import deleteIcon from '../../delete.png';
import './task.css';

const Task = (props) => {

    return (
        <div key={props.cariocaMea.id} className="task">
            <input type="checkbox" />
            <span key={'description' + props.cariocaMea.id}>{props.cariocaMea.description}</span>
            <img onClick={() => props.deleteTask(props.cariocaMea.id)} src={deleteIcon} alt='title'/>
        </div>
    );
}

export default Task;

