// src/pages/StudentTodoPage.js
import React, { useEffect, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const StudentTodoPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem('studentTasks')) || [];
    
    // Sort tasks by deadline
    storedTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    setTasks(storedTasks);
  }, []);

  const handleCheckboxChange = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleSubmitTask = (taskId) => {
    // Remove the completed task from the list
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    // Save the updated tasks list to localStorage
    localStorage.setItem('studentTasks', JSON.stringify(updatedTasks));
  };

  return (
    <Container className="mt-5">
      <h3 className="mb-4 text-center">📝 Student To-Do List</h3>
      {tasks.length === 0 ? (
        <p>No tasks assigned yet!</p>
      ) : (
        tasks.map((task) => (
          <Card key={task.id} className="mb-3">
            <Card.Body>
              <Form.Check
                type="checkbox"
                label={
                  <>
                    <strong>{task.description}</strong>
                    <br />
                    <small>Deadline: {task.deadline}</small>
                  </>
                }
                checked={task.isCompleted}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <Button
                variant="success"
                className="mt-2"
                disabled={!task.isCompleted}
                onClick={() => handleSubmitTask(task.id)}
              >
                Submit
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default StudentTodoPage;