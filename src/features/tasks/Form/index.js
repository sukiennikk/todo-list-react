import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const content = newTaskContent.trim();
    if (!content) return;

    dispatch(
      addTask({
        id: nanoid(),
        content,
        done: false,
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={(e) => setNewTaskContent(e.target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormWrapper>
  );
};

export default Form;
