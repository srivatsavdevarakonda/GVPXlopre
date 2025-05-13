import React from 'react';

function HODsTable() {
  const hods = [
    { name: 'Dr. K. L. Rao', department: 'CSE', email: 'klrao@gvp.edu.in' },
    { name: 'Dr. P. S. Reddy', department: 'ECE', email: 'psreddy@gvp.edu.in' },
    { name: 'Dr. M. Lakshmi', department: 'EEE', email: 'mlakshmi@gvp.edu.in' }
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
        hods.map((hod, index) =>
          React.createElement(
            'tr',
            { key: index },
            React.createElement('td', null, hod.name),
            React.createElement('td', null, hod.department),
            React.createElement('td', null, hod.email)
          )
        )
      )
    )
  );
}

export default HODsTable;
