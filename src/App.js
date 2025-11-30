import { HashRouter, Link, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

export default function App() {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/zadania">Zadania</Link>
          </li>
          <li>
            <Link to="/autor">O autorze</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/autor" element={<Author />} />
      </Routes>
    </HashRouter>
  );
}
