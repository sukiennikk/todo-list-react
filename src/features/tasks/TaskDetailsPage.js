import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone } from "./tasksSlice";
import { selectTaskById } from "./tasksSlice";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const task = useSelector(state =>
    selectTaskById(state, id)
  );

  if (!task) {
    return (
      <Container>
        <Header title="Nie znaleziono zadania! Spróbuj znaleźć inne" />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section
        title={task.content}
        body={
          <>
            <p>
              <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
            </p>

            <button onClick={() => dispatch(toggleTaskDone(task.id))}>
              {task.done
                ? "Oznacz jako nieukończone"
                : "Oznacz jako ukończone"}
            </button>
          </>
        }
      />
    </Container>
  );
};

export default TaskDetailsPage;
