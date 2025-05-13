import React from 'react';
import AdminsTable from './AdminsTable';
import DeansTable from './DeansTable';
import HODsTable from './HODsTable';
import './AdministrationPage.css';

const AdministrationPage = () => {
  return React.createElement(
    'div',
    { className: 'admin-wrapper' },
    [
      React.createElement(
        'h1',
        { className: 'admin-heading', key: 'main-heading' },
        'College Administration'
      ),
      React.createElement(
        'div',
        { className: 'admin-table-wrapper', key: 'admins-table' },
        React.createElement(AdminsTable)
      ),
      React.createElement(
        'h2',
        { className: 'section-title', key: 'deans-heading' },
        'Deans'
      ),
      React.createElement(
        'div',
        { className: 'admin-table-wrapper', key: 'deans-table' },
        React.createElement(DeansTable)
      ),
      React.createElement(
        'h2',
        { className: 'section-title', key: 'hods-heading' },
        'Heads of Departments'
      ),
      React.createElement(
        'div',
        { className: 'admin-table-wrapper', key: 'hods-table' },
        React.createElement(HODsTable)
      )
    ]
  );
};

export default AdministrationPage;
