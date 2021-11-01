import actionTypes from "../actions/actionTypes";

const todoReducer = (toDoList = [], action) => {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.loadToDoTasks:
      newToDoList = [...action.toDoList];
      break;

    default:
      newToDoList = toDoList;
      break;
  }
  return newToDoList;
};

export default todoReducer;
