
import { useState } from "react";

function TodoEditForm({ job, onDone, onEditTodo }) {
  const [input, setInput] = useState(job.todo);
  const [check, setCheck] = useState(job.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditTodo(job.id, { todo: input, completed: check });
    onDone();
  };

  return (
    <form className="todo-edit-form" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        value={check}
        checked={check}
        onChange={() => setCheck(prev => !prev)}
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Save</button>
      <button onClick={onDone} type="button">Cancel</button>
    </form>
  );
}

export default TodoEditForm;
