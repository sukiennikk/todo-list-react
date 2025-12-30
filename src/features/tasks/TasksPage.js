import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Wrapper from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Wrapper title="Dodaj nowe zadanie" body={<Form />} />

      <Wrapper title="Wyszukiwarka" body={<Search />} />

      <Wrapper
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;