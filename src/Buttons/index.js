import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDone})=> (
    tasks.length > 0 && (
        <div className="task-list__buttons">
            <button 
                className="task-list__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button 
                className="task-list__button"
                disabled={tasks.every(({done}) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;