import actionTypes from "./actionTypes";

export const loadToDoListAction = (toDoList) => ({
  type: actionTypes.loadToDoTasks,
  toDoList,
});
