// src/components/Academic_Calendar/Academic_Calendar.js

import React from 'react';
import './Academic_Calendar.css';

const academicData = [
  {
    program: "B.Tech Programmes # 2025-26",
    calendars: [
      { name: "B.Tech Academic Calendar V Semester", pdf: "/academic_calendar_pdfs/btech_2025_5th_sem.pdf" },
      { name: "B.Tech Academic Calendar VII Semester", pdf: "/academic_calendar_pdfs/btech_2025_7th_sem.pdf" },
    ],
  },
  {
    program: "B.Tech Programmes # 2024-25",
    calendars: [
      { name: "B.Tech Academic Calendar II Semester", pdf: "/academic_calendar_pdfs/btech_2024_2nd_sem.pdf" },
      { name: "B.Tech Academic Calendar IV Semester", pdf: "/academic_calendar_pdfs/btech_2024_4th_sem.pdf" },
      { name: "B.Tech Academic Calendar VI Semester", pdf: "/academic_calendar_pdfs/btech_2024_6th_sem.pdf" },
      { name: "B.Tech Academic Calendar VIII Semester", pdf: "/academic_calendar_pdfs/btech_2024_8th_sem.pdf" },
      { name: "B.Tech Academic Calendar I Semester", pdf: "/academic_calendar_pdfs/btech_2024_1st_sem.pdf" },
      { name: "B.Tech Academic Calendar III Semester", pdf: "/academic_calendar_pdfs/btech_2024_3rd_sem.pdf" },
      { name: "B.Tech Academic Calendar V Semester", pdf: "/academic_calendar_pdfs/btech_2024_5th_sem.pdf" },
      { name: "B.Tech Academic Calendar VII Semester", pdf: "/academic_calendar_pdfs/btech_2024_7th_sem.pdf" },
      { name: "B.Tech Annual Calendar for the Academic Year 2024-25 (TENTATIVE)", pdf: "/academic_calendar_pdfs/btech_2024_annual.pdf" },
    ],
  },
  {
    program: "M.Tech Programmes # 2024-25",
    calendars: [
      { name: "M.Tech Academic Calendar I & II Semesters", pdf: "/academic_calendar_pdfs/mtech_2024_sem1_2.pdf" },
      { name: "M.Tech Academic Calendar III & IV Semesters", pdf: "/academic_calendar_pdfs/mtech_2024_sem3_4.pdf" },
    ],
  },
  {
    program: "MCA Programme # 2024-25",
    calendars: [
      { name: "MCA Academic Calendar I & II Semesters", pdf: "/academic_calendar_pdfs/mca_2024_sem1_2.pdf" },
      { name: "MCA Academic Calendar III & IV Semesters", pdf: "/academic_calendar_pdfs/mca_2024_sem3_4.pdf" },
    ],
  },
];

const AcademicCalendar = () => {
  return (
    <div className="calendar-container">
      <h2 className="calendar-heading">Academic Calendars</h2>
      {academicData.map((section, index) => (
        <div key={index} className="calendar-section">
          <h3 className="program-title">{section.program}</h3>
          <ul className="calendar-list">
            {section.calendars.map((item, idx) => (
              <li key={idx}>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="calendar-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AcademicCalendar;
