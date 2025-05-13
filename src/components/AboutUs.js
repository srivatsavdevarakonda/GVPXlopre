import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Gayatri Vidya Parishad College of Engineering (GVPCE)</h1>
      
      <section>
        <h2>Brief About GVPCE</h2>
        <p>The GVPCE had its humble beginning in December 1996... <strong>offering 10 B.Tech. Programs, 5 M.Tech. and one MCA Program</strong> approved by AICTE.</p>
      </section>

      <section>
        <h2>Accreditations</h2>
        <ul>
          <li><strong>NAAC:</strong> Accredited twice with “A” grade (CGPA 3.47/4.00).</li>
          <li><strong>NBA:</strong> All B.Tech. programs accredited at least twice.</li>
          <li><strong>UGC:</strong> Autonomous status since 2009. Included under 2(f) & 12(B).</li>
          <li><strong>NIRF:</strong> Ranked for 6 years, Innovation Band: 151-300 in 2023.</li>
        </ul>
      </section>

      <section>
        <h2>Highlights - Teaching & Research</h2>
        <ul>
          <li>Best EAMCET & ECET ranks; GATE-qualified PG students.</li>
          <li><strong>122 PhDs</strong> among 250 faculty. 27 Doctorates guided.</li>
          <li>Recognized <strong>SIRO (GVP-SIRC)</strong> & <strong>GVP-LIAS</strong>.</li>
          <li><strong>TEQIP-II Grant:</strong> ₹5 Cr for research & innovation.</li>
          <li><strong>R&D:</strong> ₹13.06 Cr funded projects; ₹7.01 Cr consultancy projects.</li>
        </ul>
      </section>

      <section>
        <h2>Highlights - Infrastructure</h2>
        <ul>
          <li>21 acres campus, 44,000 m² built-up area with greenery.</li>
          <li>45+ MoUs; 7 Labs with APSSDC & SIEMENS (₹2 Cr).</li>
          <li>Modern Library, Sports, and Academic Labs.</li>
        </ul>
      </section>

      <section>
        <h2>Highlights - Students</h2>
        <ul>
          <li><strong>84% placement</strong> in 2022–23; highest package ₹44 LPA.</li>
          <li>Admissions to premier Indian & foreign institutes.</li>
          <li>Entrepreneurship via Innovation Council.</li>
          <li>Clubs: NSS, CFSR, GC3, National-level sports accolades.</li>
        </ul>
      </section>

      <section>
        <h2>Highlights - Faculty</h2>
        <ul>
          <li>AICTE pay scales.</li>
          <li>Support for QIPs, Research Publications, etc.</li>
        </ul>
      </section>

      <section>
        <h2>Programs Offered</h2>
        <h3>Undergraduate</h3>
        <table>
          <thead>
            <tr><th>Branch</th><th>Year</th><th>Intake</th></tr>
          </thead>
          <tbody>
            <tr><td>Chemical Engineering</td><td>1996</td><td>60</td></tr>
            <tr><td>Computer Science and Engineering</td><td>1996</td><td>240</td></tr>
            <tr><td>CSE (AI & ML)</td><td>2020</td><td>60</td></tr>
            <tr><td>CSE (Data Science)</td><td>2020</td><td>60</td></tr>
            <tr><td>Electrical and Electronics Engineering</td><td>1996</td><td>120</td></tr>
            <tr><td>Mechanical Engineering</td><td>1996</td><td>120</td></tr>
            <tr><td>Mechanical (Robotics)</td><td>2020</td><td>60</td></tr>
            <tr><td>Civil Engineering</td><td>1999</td><td>120</td></tr>
            <tr><td>Information Technology</td><td>1999</td><td>60</td></tr>
            <tr><td>Electronics and Communication Engineering</td><td>2000</td><td>240</td></tr>
            <tr><td><strong>Total Intake</strong></td><td></td><td><strong>1140</strong></td></tr>
          </tbody>
        </table>

        <h3>Postgraduate</h3>
        <table>
          <thead>
            <tr><th>Program</th><th>Year</th><th>Intake</th></tr>
          </thead>
          <tbody>
            <tr><td>M.Tech. (CSE)</td><td>2004</td><td>12</td></tr>
            <tr><td>M.Tech. (Power Electronics and Drives)</td><td>2012</td><td>12</td></tr>
            <tr><td>M.Tech. (CAD/CAM)</td><td>2004</td><td>12</td></tr>
            <tr><td>M.Tech. (Structural Engineering)</td><td>2012</td><td>12</td></tr>
            <tr><td>M.Tech. (VLSI & Embedded)</td><td>2010</td><td>12</td></tr>
            <tr><td><strong>Total Intake</strong></td><td></td><td><strong>60</strong></td></tr>
            <tr><td>M.C.A.</td><td></td><td>60</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AboutUs;
