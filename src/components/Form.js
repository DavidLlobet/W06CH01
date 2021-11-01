const Form = () => {
  return (
    <form onSubmit>
      <label htmlFor></label>
      <input
        autoComplete="off"
        type="text"
        className="form-control"
        id="id"
        placeholder="id"
        value
        onChange
      ></input>
      <button type="submit">CREATE TASK</button>
    </form>
  );
};

export default Form;
