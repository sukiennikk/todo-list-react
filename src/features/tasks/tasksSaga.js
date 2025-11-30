import { takeEvery, select, call, put } from "redux-saga/effects";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  addTask,
  removeTask,
  toggleTaskDone,
  setAllDone,
  setTasks,
  fetchExampleTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* saveTasksHandler() {
  const tasks = yield select(state => state.tasks.tasks);
  saveTasksInLocalStorage(tasks);
}

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    console.error("Błąd pobierania exampleTasks:", error);
  }
}

export function* tasksSaga() {
  yield takeEvery(
    [addTask.type, removeTask.type, toggleTaskDone.type, setAllDone.type, setTasks.type],
    saveTasksHandler
  );

  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
