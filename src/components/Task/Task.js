import "./Task.css";

const Task = ({ taskData: { text, isChecked } }) => {
  return (
    <li className="todo__list">
      <p className="todo__task-name">{text}</p>
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={isChecked}
      ></input>
      <button className="todo__button">Update</button>
      <button className="todo__button">Delete</button>
    </li>
  );
};

export default Task;
