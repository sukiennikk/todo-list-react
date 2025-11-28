import { List, Item, Content, Button } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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
                     {task.id} - {task.content} 
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
);


export default TaskList;