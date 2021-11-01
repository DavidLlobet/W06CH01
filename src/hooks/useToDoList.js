import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import todoThunks from "../redux/thunks/todoThunks";

const useToDoList = () => {
  const toDoList = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  const loadTask = useCallback(() => {
    dispatch(todoThunks());
  }, [dispatch]);

  return { toDoList, loadTask };
};

export default useToDoList;
