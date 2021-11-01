const Form = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <label className="form__label" htmlFor></label>
      <input
        autoComplete="off"
        type="text"
        className="form-control"
        id="id"
        placeholder="id"
        value=""
        onChange
      ></input>
      <button type="submit">CREATE TASK</button>
    </form>
  );
};

export default Form;
