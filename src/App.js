import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Wrapper from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./Hooks/useTasks";

function App() {
  const {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => setHideDone((hide) => !hide);

  return (
    <Container>
      <Header title="Lista zadań" />

      <Wrapper
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Wrapper
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
