import { useSelector, useDispatch } from "react-redux";
import { TaskListButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone, fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) return null;

  return (
    <TaskListButtons>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>

      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(task => task.done)}
      >
        Ukończ wszystkie
      </Button>
    </TaskListButtons>
  );
};

export default Buttons;
