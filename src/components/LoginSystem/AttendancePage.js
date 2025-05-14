import React, { useState, useEffect } from 'react';
import './AttendancePage.css';

function AttendancePage() {
  const rollPrefix = '322103383';
  const totalStudents = 70;

  const [selectionType, setSelectionType] = useState('absent');
  const [inputText, setInputText] = useState('');
  const [checkedStates, setCheckedStates] = useState(Array(totalStudents).fill(false));
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastAction, setLastAction] = useState('');
  const [filteredView, setFilteredView] = useState('all');

  // Reset input and checkboxes
  const resetForm = () => {
    setInputText('');
    setCheckedStates(Array(totalStudents).fill(false));
  };

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => setShowSuccess(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSelectionTypeChange = (e) => {
    setSelectionType(e.target.value);
    setLastAction(`Mode switched to marking ${e.target.value} students`);

    const container = document.querySelector('.attendance-container');
    if (container) {
      container.classList.add('mode-change');
      setTimeout(() => container.classList.remove('mode-change'), 500);
    }
  };

  const applySelection = () => {
    if (!inputText.trim()) {
      setLastAction('Please enter roll numbers before applying');
      return;
    }

    const inputRolls = inputText.split(',').map(r => r.trim().padStart(2, '0'));

    const newCheckedStates = checkedStates.map((_, index) => {
      const suffix = (index + 1).toString().padStart(2, '0');
      const mentioned = inputRolls.includes(suffix);
      return selectionType === 'absent' ? mentioned : !mentioned;
    });

    setCheckedStates(newCheckedStates);
    setLastAction(`Applied ${selectionType} status to rolls: ${inputText}`);

    const rows = document.querySelectorAll('.students-list-horizontal .student-card');
    inputRolls.forEach(suffix => {
      const index = parseInt(suffix, 10) - 1;
      const row = rows[index];
      if (row) {
        row.classList.add('highlight-update');
        setTimeout(() => row.classList.remove('highlight-update'), 1000);
      }
    });
  };

  const handleSubmit = () => {
    const attendanceData = checkedStates.map((checked, index) => ({
      rollNo: rollPrefix + (index + 1).toString().padStart(3, '0'),
      present: !checked
    }));

    console.log('Submitted Attendance:', attendanceData);

    const absentCount = checkedStates.filter(state => state).length;
    const presentCount = totalStudents - absentCount;

    setShowSuccess(true);
    setLastAction(`Attendance submitted successfully! ${presentCount} present, ${absentCount} absent.`);

    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.classList.add('submitted');
      setTimeout(() => {
        submitBtn.classList.remove('submitted');
        resetForm();
      }, 1500);
    }
  };

  const handleFilterChange = (filter) => {
    setFilteredView(filter);
    setLastAction(`Filtered view to show ${filter} students`);
  };

  const getFilteredStudents = () => {
    if (filteredView === 'all') return Array.from({ length: totalStudents }, (_, i) => i);
    return checkedStates
      .map((isAbsent, i) => (filteredView === 'present' ? !isAbsent : isAbsent) ? i : null)
      .filter(i => i !== null);
  };

  const selectAllOrNone = (selectAll) => {
    setCheckedStates(Array(totalStudents).fill(selectAll));
    setLastAction(`Marked all students as ${selectAll ? 'absent' : 'present'}`);
  };

  return (
    <div className="attendance-container">
      <h2>Attendance Entry</h2>

      {showSuccess && <div className="success-message"><span>✓</span> {lastAction}</div>}
      {!showSuccess && lastAction && <div className="action-message">{lastAction}</div>}

      <div className="form-row">
        <label>Marking:</label>
        <select value={selectionType} onChange={handleSelectionTypeChange} className="selection-dropdown">
          <option value="absent">Absent Students</option>
          <option value="present">Present Students</option>
        </select>
      </div>

      <div className="form-row">
        <label>Enter Roll Suffixes (comma-separated):</label>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="e.g., 01, 03, 10"
          className="roll-input"
        />
        <button onClick={applySelection} className="apply-btn">Apply</button>
      </div>

      <div className="filter-controls">
        <span>View: </span>
        {['all', 'present', 'absent'].map(view => (
          <button
            key={view}
            className={`filter-btn ${filteredView === view ? 'active' : ''}`}
            onClick={() => handleFilterChange(view)}
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </button>
        ))}
        <div className="bulk-actions">
          <button className="bulk-btn" onClick={() => selectAllOrNone(false)}>Mark All Present</button>
          <button className="bulk-btn" onClick={() => selectAllOrNone(true)}>Mark All Absent</button>
        </div>
      </div>

      <div className="students-list-horizontal">
        {getFilteredStudents().map(index => {
          const roll = rollPrefix + (index + 1).toString().padStart(3, '0');
          const isChecked = checkedStates[index];

          return (
            <div key={index} className={`student-card ${isChecked ? 'absent-row' : 'present-row'}`}>
              <div className="roll">{roll}</div>
              <div className={`status ${isChecked ? 'absent' : 'present'}`}>
                {isChecked ? 'Absent' : 'Present'}
              </div>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    const newStates = [...checkedStates];
                    newStates[index] = e.target.checked;
                    setCheckedStates(newStates);

                    const row = e.target.closest('.student-card');
                    if (row) {
                      row.classList.add('status-change');
                      setTimeout(() => row.classList.remove('status-change'), 500);
                    }
                  }}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          );
        })}
      </div>

      <div className="attendance-summary">
        <div className="summary-item"><span className="summary-label">Total:</span> <span className="summary-value">{totalStudents}</span></div>
        <div className="summary-item"><span className="summary-label">Present:</span> <span className="summary-value present">{totalStudents - checkedStates.filter(Boolean).length}</span></div>
        <div className="summary-item"><span className="summary-label">Absent:</span> <span className="summary-value absent">{checkedStates.filter(Boolean).length}</span></div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        <span className="btn-text">Submit Attendance</span>
        <span className="btn-icon">✓</span>
      </button>
    </div>
  );
}

export default AttendancePage;