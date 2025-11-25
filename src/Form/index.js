import { useState, useRef } from "react";
import { FormWrapper, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
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
