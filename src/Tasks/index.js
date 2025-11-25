import React from "react";
import "./style.css";
import { List, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map((task, index) => (
            <Item
                key={index}
                hidden={task.done && hideDone}
                >
                <button 
                    className={`tasksList__taskButton${task.done ? " tasksList__taskButton--done" : ""}`} 
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <Content>
                     {task.id} - {task.content} 
                </Content>            
                <button 
                    className="tasksList__taskButton tasksList__taskButton--remove" 
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </Item>
        ))}    
    </List>
);


export default Tasks;