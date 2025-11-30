const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks) => {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
  } catch (e) {
    console.error("Błąd zapisu do localStorage:", e);
  }
};

export const getTasksFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem(localStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Błąd odczytu z localStorage:", e);
    return [];
  }
};
