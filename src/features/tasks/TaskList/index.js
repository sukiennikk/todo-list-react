import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectFilteredTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { useHistory } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id}>
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>

          <Content
            done={task.done}
            onClick={() => history.push(`/zadania/${task.id}`)}
          >
            {task.content}
          </Content>

          <Button
            toggleRemove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
