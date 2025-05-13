import React from 'react';

const AdminsTable = () => {
  return React.createElement(
    'table',
    { className: 'admin-table' },
    [
      React.createElement('thead', {}, 
        React.createElement('tr', {}, [
          React.createElement('th', {}, 'Name'),
          React.createElement('th', {}, 'Position'),
          React.createElement('th', {}, 'Email')
        ])
      ),
      React.createElement('tbody', {}, [
        React.createElement('tr', {}, [
          React.createElement('td', {}, 'Dr. ABC'),
          React.createElement('td', {}, 'Principal'),
          React.createElement('td', {}, 'abc@example.com')
        ])
      ])
    ]
  );
};

export default AdminsTable;
