import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskDetailsPage from "./features/tasks/TaskDetailsPage";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import Navigation from "./common/Navigation";

export default function App() {
  return (
    <HashRouter>
      <Navigation />

    <Switch>
      <Route exact path="/">
        <TasksPage />
      </Route>

      <Route path="/zadania/:id">
        <TaskDetailsPage />
      </Route>

      <Route exact path="/zadania">
        <Redirect to="/" />
      </Route>

      <Route path="/autor">
        <Author />
      </Route>
    </Switch>
    </HashRouter>
  );
}
