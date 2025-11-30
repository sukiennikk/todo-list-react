import { createSlice } from "@reduxjs/toolkit";

const loadInitialTasks = () => {
  try {
    const saved = localStorage.getItem("tasks");
    if (!saved) {
      return [
        { id: 1, content: "przejść na Reacta", done: false },
        { id: 2, content: "zjeść obiad", done: true },
      ];
    }
    return JSON.parse(saved);
  } catch (e) {
    console.error("Błąd wczytywania z localStorage:", e);
    return [];
  }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadInitialTasks(),
    hideDone: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
    }
  },
});

export const {
  addTask,
  removeTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;

export default tasksSlice.reducer;