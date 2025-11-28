import { TaskListButtons, Button } from "./styled";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone})=> (
    tasks.length > 0 && (
        <TaskListButtons>
            <Button 
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                className="task-list__button"
                disabled={tasks.every(({done}) => done)}
            >
                Ukończ wszystkie
            </Button>
        </TaskListButtons>
    )
);

export default Buttons;