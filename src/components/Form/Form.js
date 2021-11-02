import "./Form.css";

const Form = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={handlerSubmit}
    >
      <input
        type="text"
        className="form__control"
        placeholder="Write the task here"
        onChange={() => {}}
        required
      ></input>
      <button className="form__button" type="submit">
        CREATE TASK
      </button>
    </form>
  );
};

export default Form;
