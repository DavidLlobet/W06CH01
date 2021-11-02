import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";
import { loadTasksThunk } from "./redux/thunks/tasksThunks";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => tasks);

  useEffect(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return (
    <>
      <h1>TODO LIST</h1>
      <Form />
      <ul className="list">
        {tasks.map((task) => (
          <Task taskData={task} key={task.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
