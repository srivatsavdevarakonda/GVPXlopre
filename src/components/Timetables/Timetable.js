import React from "react";
import "./Timetable.css";

const timeTableData = [
  {
    date: "2025-Apr-15",
    title:
      "TIME TABLE OF B.TECH III SEMESTER SUPPLEMENTARY EXAMINATIONS (R-2022,R-2020, R-2019,R-2015) MAY 2025",
    link: "/timetable_pdfs/TIME TABLE OF B.TECH III SEMESTER  SUPPLEMENTARY EXAMINATIONS (R-2022,R-2020, R-2019,R-2015) MAY 2025.pdf"
  },
  {
    date: "2025-Apr-15",
    title:
      "TIME TABLE OF B.TECH IV SEMESTER REGULAR EXAMINATIONS (R-2022) MAY 2025",
    link: "/timetable_pdfs/TIME TABLE OF B.TECH IV SEMESTER  REGULAR EXAMINATIONS (R-2022) MAY 2025.pdf"
  },
  {
    date: "2025-Apr-15",
    title:
      "TIME TABLE OF B.TECH IV SEMESTER SUPPLEMENTARY EXAMINATIONS (R-2022,R-2020, R-2019,R-2015) MAY 2025",
    link: "#"
  },
  {
    date: "2025-Mar-20",
    title:
      "TIME TABLE OF B.TECH VI SEMESTER REGULAR READMITTED & SUPPLEMENTARY (R2020-R2019-R2015) APRIL 2025",
    link: "#"
  },
  {
    date: "2025-Mar-20",
    title:
      "Time Table for B.Tech V Semester Supplementary (R-2015, R-2019,R-2020,R-2022) Examinations, April 2025",
    link: "#"
  },
  {
    date: "2025-Mar-20",
    title:
      "Time Table for B.Tech VII Semester Supplementary (R-2015, R-2019,R-2020) Examinations, March 2025",
    link: "#"
  },
  {
    date: "2025-Mar-20",
    title:
      "Revised Time-Table for B.Tech - VI Semester Regular (R-2022) Examinations April 2025",
    link: "#"
  },
  {
    date: "2025-Mar-12",
    title:
      "Time Table for B.Tech VIII Semester Supplementary (R-2019, R-2015) Examinations, March 2025",
    link: "#"
  },
  {
    date: "2025-Mar-12",
    title:
      "Time Table for MCA IV Semester Regular and Supplementary and MCA III Semester Supplementary (R-2022) Examinations, March 2025",
    link: "#"
  },
  {
    date: "2025-Mar-04",
    title:
      "TIME TABLE FOR M.Tech I SEMESTER(R-2022) REGULAR AND SUPPLEMENTARY & II SEM (R-2022) SUPPLEMENTARY EXAMINATIONS, MARCH 2025",
    link: "#"
  },
  {
    date: "2025-Jan-23",
    title:
      "TIME TABLE FOR MCA I SEMESTER(R-2022) REGULAR AND SUPPLEMENTARY EXAMINATIONS, JANUARY 2025",
    link: "#"
  },
  {
    date: "2024-Dec-19",
    title:
      "Time Table for B.Tech I Semester Supplementary (R-2015, R-2019,R-2020) Examinations, January 2025",
    link: "#"
  },
  {
    date: "2024-Dec-19",
    title:
      "Time Table for B.Tech I Semester Regular & Supplementary (R-2022) (For 2022, 2023 & 2024 Admitted Batches) Examinations, January 2025",
    link: "#"
  },
  {
    date: "2024-Nov-28",
    title:
      "Time Table for B.Tech II Semester Supplementary (R-2022, R-2020, R-2019, R-2015) Examinations, December 2024",
    link: "#"
  },
  {
    date: "2024-Nov-22",
    title:
      "Time Table for B.Tech III Semester Regular & Supplementary (R-2022, R-2020, R-2019, R-2015) Examinations, December 2024",
    link: "#"
  },
  {
    date: "2024-Oct-28",
    title:
      "TIME TABLE FOR MCA II SEMESTER (R-2022) SUPPLEMENTARY EXAMINATIONS, NOVEMBER 2024",
    link: "#"
  },
  {
    date: "2024-Oct-26",
    title:
      "TIME TABLE FOR MCA III SEMESTER(R-2022) REGULAR AND SUPPLEMENTARY EXAMINATIONS, NOVEMBER 2024",
    link: "#"
  },
  {
    date: "2024-Oct-24",
    title:
      "Time Table for B.Tech IV Semester Supplementary (R-2022,R2020,R-2019,R-2015) Examinations, November 2024",
    link: "#"
  },
  {
    date: "2024-Oct-24",
    title:
      "Time Table for B.Tech VI Semester Supplementary (R-2020, R-2019, R-2015) Examinations, November 2024",
    link: "#"
  },
  {
    date: "2024-Oct-23",
    title:
      "Time Table for B.Tech V Semester Regular (R-2022) Examinations, November 2024",
    link: "#"
  }
];

function Time_Table() {
  return (
    <div className="time-table-container">
      <h2 className="heading">Recent Time Tables</h2>
      <ul className="time-table-list">
        {timeTableData.map((item, index) => (
          <li key={index} className="time-table-item">
            <span className="date">{item.date}</span>
            <a
              className="title"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Time_Table;
