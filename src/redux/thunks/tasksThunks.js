import { loadToDoListAction } from "../actions/actionCreators";

const todoThunks = async () => async (dispatch) => {
  const response = await fetch("https://w06ch01-api--local.herokuapp.com/todo");
  const todoList = await response.json();
  dispatch(loadToDoListAction(todoList));
};

export default todoThunks;
