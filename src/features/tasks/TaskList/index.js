import { useSelector } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    return ((
    <List>
        {tasks.map((task, index) => (
            <Item
                key={index}
                hidden={task.done && hideDone}
                >
                <Button 
                    toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content} 
                </Content>            
                <Button 
                    toggleRemove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}    
    </List>
));
};


export default TaskList;