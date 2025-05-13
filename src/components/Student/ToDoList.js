
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ToDoList = ({ rollNumber }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    const res = await axios.post('http://localhost:5000/api/todos', { rollNumber });
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post('http://localhost:5000/api/add-task', { rollNumber, task: newTask });
    setNewTask('');
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h3>📝 To-Do List</h3>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t.task}</li>
        ))}
      </ul>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="New task" />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default ToDoList;

