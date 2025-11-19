import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasksList">
        {tasks.map((task, index) => (
            <li
                key={index}
                className={`tasksList__taskItem${task.done && hideDone ? " tasksList__taskItem--hidden" : ""}`}
                >
                <button 
                    className={`tasksList__taskButton${task.done ? " tasksList__taskButton--done" : ""}`} 
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent${task.done ? " tasksList__taskContent--done" : ""}`}>
                    {task.id} - {task.content} 
                </span>                
                <button 
                    className="tasksList__taskButton tasksList__taskButton--remove" 
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}    
    </ul>
);


export default Tasks;