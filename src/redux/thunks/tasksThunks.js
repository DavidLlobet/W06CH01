import { loadTasksAction } from "../actions/actionCreators";

export const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://w06ch01-api--local.herokuapp.com/todo"
    );
    const tasks = await response.json();
    dispatch(loadTasksAction(tasks));
  };
};
