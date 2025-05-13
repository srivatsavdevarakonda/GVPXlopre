import React from 'react';

function DeansTable() {
  const deans = [
    { name: 'Dr. Anjali Mehta', department: 'Academic Affairs', email: 'anjali@gvp.edu.in' },
    { name: 'Dr. S. Krishna', department: 'Student Welfare', email: 'krishna@gvp.edu.in' }
  ];

  return React.createElement(
    'div',
    { className: 'admin-table-wrapper' },
    React.createElement(
      'table',
      { className: 'admin-table' },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement('th', null, 'Name'),
          React.createElement('th', null, 'Department'),
          React.createElement('th', null, 'Email')
        )
      ),
      React.createElement(
        'tbody',
        null,
        deans.map((dean, index) =>
          React.createElement(
            'tr',
            { key: index },
            React.createElement('td', null, dean.name),
            React.createElement('td', null, dean.department),
            React.createElement('td', null, dean.email)
          )
        )
      )
    )
  );
}

export default DeansTable;
