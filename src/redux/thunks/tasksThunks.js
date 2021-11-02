import { loadTasksAction } from "../actions/actionCreators";

const todoThunks = () => async (dispatch) => {
  const response = await fetch("https://w06ch01-api--local.herokuapp.com/todo");
  const todoList = await response.json();
  dispatch(loadTasksAction(todoList));
};

export default todoThunks;
