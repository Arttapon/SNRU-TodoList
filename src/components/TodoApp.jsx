import React, { useEffect, useState } from "react";
import axios from 'axios';
import Dashboard from "./Dashboard";
import FormAddTodo from "./FormAddTodo";
import TodoContainer from "./TodoContainer";

function TodoApp() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const apiUrl = 'http://localhost:8000/todos';
  

  useEffect(() => {
    setIsLoading(true);
    axios.get(apiUrl)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [trigger]);

  const handleAdd = (newJob) => {
    axios.post(apiUrl, newJob)
      .then(res => {
        setTrigger(prev => !prev);
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };

  const handleEdit = (id, updatedJob) => {
    // Handle the edit logic
    axios.put(`${apiUrl}/${id}`, updatedJob)
      .then(res => {
        setTrigger(prev => !prev);
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };

  const handleDelete = (id) => {
    // Handle the delete logic
    axios.delete(`${apiUrl}/${id}`)
      .then(res => {
        setTrigger(prev => !prev);
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  };

  if (isLoading) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div className="todo-app">
      <Dashboard task={data.length} />
      <FormAddTodo hdlAdd={handleAdd} />
      <TodoContainer todos={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default TodoApp;

