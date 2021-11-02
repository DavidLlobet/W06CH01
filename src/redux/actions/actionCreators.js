import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const updateTaskAction = (task) => ({
  type: actionTypes.updateTask,
  task,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const toggleTaskAction = (id) => ({
  type: actionTypes.toggleTask,
  id,
});
