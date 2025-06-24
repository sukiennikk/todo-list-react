import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="tasksList">
        {props.tasks.map((task, index) => (
            <li
                key={index}
                className={`tasks__item${task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""}`}
            >
                <button 
                    className={`tasksList__taskButton${task.done ? " tasksList__taskButton--done" : ""}`} 
                    data-index={index}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent${task.done ? " tasksList__taskContent--done" : ""}`}>
                    {task.content}
                </span>                
                <button 
                    className="tasksList__taskButton tasksList__taskButton--remove" 
                    data-index={index}
                >
                    🗑
                </button>
            </li>
        ))}    
    </ul>
);


export default Tasks;