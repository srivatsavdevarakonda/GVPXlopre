import React from 'react';
import { Link } from 'react-router-dom';
import './Library.css';  

function LibraryPage() {
    return (
      <div>
        <h1>Welcome to Our Library</h1>
        <p>Here is a brief introduction to our library...</p>
        <p>Visit our website for more information:</p>
        <a href="https://gvpce-econnect.com" target="_blank" rel="noopener noreferrer">
          gvpce-econnect.com
        </a>
      </div>
    );
  }
  
  export default LibraryPage;