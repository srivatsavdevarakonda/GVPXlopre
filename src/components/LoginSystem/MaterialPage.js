// src/pages/MaterialPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const MaterialPage = () => {
  const [materialName, setMaterialName] = useState('');
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!materialName || !file) {
      alert('Please enter a material name and choose a file.');
      return;
    }
    setSubmitted(true);
    // Later: you can send this data to a backend or Firebase
    console.log('Material Name:', materialName);
    console.log('File:', file.name);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4 text-center">Upload Material</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Material Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter material name"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Provide Material
        </Button>
      </Form>

      {submitted && (
        <Alert variant="success" className="mt-4 text-center">
          Material provided successfully! 📝
        </Alert>
      )}
    </Container>
  );
};

export default MaterialPage;