import { useState } from "react";

function FormAddTodo(props) {
  const { hdlAdd } = props;
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const hdlSubmit = (e) => {
    e.preventDefault();
    let newJob = { todo: input, completed: false, user: 1 };
    hdlAdd(newJob);
    setInput('');
    setIsEditing(false);
  };

  const handleInputClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <form className="form-add-todo" onSubmit={hdlSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={handleInputClick}
        onBlur={handleBlur}
        placeholder={isEditing ? '' : 'Add New Job'}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FormAddTodo;
