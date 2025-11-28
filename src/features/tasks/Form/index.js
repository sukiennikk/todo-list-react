import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormWrapper, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();



    const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
    };


    return (
        <FormWrapper onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormWrapper>
    );
};

export default Form;
