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
        className="form-control"
        placeholder="Write the task here"
        onChange={() => {}}
        required
      ></input>
      <button type="submit">CREATE TASK</button>
    </form>
  );
};

export default Form;
