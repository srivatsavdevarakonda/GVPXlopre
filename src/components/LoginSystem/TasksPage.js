// src/pages/TasksPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './TasksPage.css';

const TasksPage = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new task object
    const newTask = {
      id: Date.now(), // Using timestamp as unique id
      description: taskDescription,
      deadline: deadline,
      maxMarks: maxMarks,
      isCompleted: false, // Tasks are initially incomplete
    };

    // Get existing tasks from localStorage (if any)
    const existingTasks = JSON.parse(localStorage.getItem('studentTasks')) || [];

    // Add the new task to the list
    const updatedTasks = [...existingTasks, newTask];

    // Log the task and updated task list for debugging
    console.log("Saving task:", newTask); // Log to verify if task is created correctly
    console.log("Updated tasks:", updatedTasks); // Log to verify if tasks are updated correctly

    // Save the updated list back to localStorage
    localStorage.setItem('studentTasks', JSON.stringify(updatedTasks));

    // Show success alert
    setShowAlert(true);

    // Reset form fields
    setTaskDescription('');
    setDeadline('');
    setMaxMarks('');

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Container className="mt-5">
      <h3 className="mb-4">Assign a New Task</h3>

      {/* Alert to show after task assignment */}
      {showAlert && <Alert variant="success">Task updated to student's to-do list!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="taskDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            maxLength={500}
            placeholder="Enter task description (max 500 words)"
            required
          />
        </Form.Group>

        <Form.Group controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="maxMarks">
          <Form.Label>Max Marks</Form.Label>
          <Form.Control
            type="number"
            value={maxMarks}
            onChange={(e) => setMaxMarks(e.target.value)}
            min="0"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Assign Task
        </Button>
      </Form>
    </Container>
  );
};

export default TasksPage;