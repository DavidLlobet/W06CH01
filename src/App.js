import "./App.css";
import Form from "./components/Form/Form";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <h1>TODO LIST</h1>
      <Form />
      <ul>
        <Task />
      </ul>
    </>
  );
}

export default App;
