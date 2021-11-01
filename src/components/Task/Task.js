const Task = (toDoTask) => {
  return (
    <li className="todo__list">
      <p className="todo__task-name">{toDoTask.text}</p>
      <input className="todo__checkbox" type="checkbox"></input>
      <button onClick className="todo__button">
        Update
      </button>
      <button onClick className="todo__button">
        Delete
      </button>
    </li>
  );
};

export default Task;
