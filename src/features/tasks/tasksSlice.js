import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].done = !state.tasks[index].done;
      }
    },

    setAllDone: (state) => {
      state.tasks = state.tasks.map(task => ({ ...task, done: true }));
    },

    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },

    fetchExampleTasks: (state) => {

    },
  },
});

export const {
  addTask,
  removeTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  setTasks,
  fetchExampleTasks,
  setSearchQuery,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;

export const selectTaskById = (state, taskId) =>
  state.tasks.tasks.find(task => task.id === taskId);

export const selectFilteredTasks = (state) => {
  const { tasks, hideDone, searchQuery } = state.tasks;

  return tasks.filter(task => {
    if (hideDone && task.done) {
      return false;
    }

    return task.content
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });
};

