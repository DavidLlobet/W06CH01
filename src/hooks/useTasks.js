import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import todoThunks from "../redux/thunks/tasksThunks";

const useTasks = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();
  const loadTasks = useCallback(() => {
    dispatch(todoThunks());
  }, [dispatch]);

  return { tasks, loadTasks };
};

export default useTasks;
