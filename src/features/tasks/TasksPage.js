import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Wrapper from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "./Hooks/useTasks";
import { selectTasks } from './tasksSlice';

function TasksPage () {
  const {
    // tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  const { tasks } = useSelector(selectTasks);

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
          <TaskList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default TasksPage;
