import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import TodoEditForm from "./TodoEditForm";

function TodoItem(props) {
  const { job, onEdit, onDelete } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedJob, setEditedJob] = useState(job);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedJob(job);
  };

  const handleSave = () => {
    onEdit(editedJob.id, editedJob);
    setIsEditing(false);
  };

  const confirmDelete = () => {
    const confirmDelete = window.confirm("คุณต้องการจะลบงานนี้ใช่หรือไม่?");
    if (confirmDelete) {
      onDelete(job.id);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const toggleCompletion = () => {
    const updatedJob = { ...editedJob, completed: !editedJob.completed };
    onEdit(updatedJob.id, updatedJob);
  };

  const textStyle = {
    textDecoration: job.completed ? "line-through" : "none",
    color: job.completed ? "red" : "inherit",
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit">
          <input
            className="inputEdit"
            type="text"
            name="todo"
            value={editedJob.todo}
            onChange={handleChange}
          />
          <div className="btn-group">
            <a onClick={handleSave}> <FaSave /> Save</a>
            <a onClick={handleCancelEdit}>Cancel</a>
          </div>
        </div>
      ) : (
        <>
          <p style={textStyle} onClick={toggleCompletion}>
            {job.todo}
          </p>
          <div className="btn-group">
            <a onClick={handleEdit}> <FaEdit />Edit</a>
            <a onClick={confirmDelete}> <FaTrash />Delete</a>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
