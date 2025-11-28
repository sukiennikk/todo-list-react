import { useSelector, useDispatch } from "react-redux";
import { TaskListButtons, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone})=> {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()

    return (
    tasks.length > 0 && (
        <TaskListButtons>
            <Button 
                onClick={() => dispatch(toggleHideDone())}
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
    ));
};


export default Buttons;