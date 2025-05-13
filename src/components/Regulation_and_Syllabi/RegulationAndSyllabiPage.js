import React, { useState } from 'react';
import './RegulationAndSyllabiPage.css';  // Link to your CSS for styling

function RegulationAndSyllabiPage() {
  const [showBTech, setShowBTech] = useState(false);
  const [showMTech, setShowMTech] = useState(false);

  const toggleBTech = () => setShowBTech(!showBTech);
  const toggleMTech = () => setShowMTech(!showMTech);

  return React.createElement(
    'div',
    { className: 'regulation-syllabi-container' },
    React.createElement(
      'h1',
      { className: 'page-title' },
      'Regulations and Syllabi'
    ),
    React.createElement(
      'div',
      { className: 'section-container' },
      React.createElement(
        'div',
        { className: 'section btech-section' },
        React.createElement(
          'button',
          { className: 'toggle-button', onClick: toggleBTech },
          showBTech ? 'Hide BTech' : 'Show BTech'
        ),
        showBTech && React.createElement(
          'ul',
          { className: 'branches-list' },
          React.createElement('li', null, 'CSE'),
          React.createElement('li', null, 'CSM'),
          React.createElement('li', null, 'CSD')
        )
      ),
      React.createElement(
        'div',
        { className: 'section mtech-section' },
        React.createElement(
          'button',
          { className: 'toggle-button', onClick: toggleMTech },
          showMTech ? 'Hide MTech' : 'Show MTech'
        ),
        showMTech && React.createElement(
          'ul',
          { className: 'branches-list' },
          React.createElement('li', null, 'CSE'),
          React.createElement('li', null, 'VLSI')
        )
      )
    )
  );
}

export default RegulationAndSyllabiPage;
