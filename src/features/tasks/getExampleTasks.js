export const getExampleTasks = async () => {
  const url = `${process.env.PUBLIC_URL || ""}/exampleTasks.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Coś poszło nie tak! ", error);
    throw error;
  }
};
