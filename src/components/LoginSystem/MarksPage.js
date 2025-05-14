import React, { useState } from 'react';

const MarksPage = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [marksVisible, setMarksVisible] = useState(false);

  const [marks, setMarks] = useState({
    mid1: '',
    mid2: '',
    assignment1: '',
    assignment2: '',
    quiz1: '',
    quiz2: '',
  });

  const handleRollSubmit = () => {
    setMarksVisible(true);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };

  const calculateTotal = () => {
    const {
      mid1,
      mid2,
      assignment1,
      assignment2,
      quiz1,
      quiz2,
    } = marks;

    const mid1Num = parseFloat(mid1) || 0;
    const mid2Num = parseFloat(mid2) || 0;
    const assgn1 = parseFloat(assignment1) || 0;
    const assgn2 = parseFloat(assignment2) || 0;
    const qz1 = parseFloat(quiz1) || 0;
    const qz2 = parseFloat(quiz2) || 0;

    const avgCA = (assgn1 + assgn2 + qz1 + qz2) / 4;
    const midPart = (2 * Math.max(mid1Num, mid2Num) + Math.min(mid1Num, mid2Num)) / 3;

    return (avgCA + midPart).toFixed(2);
  };

  const handleSubmit = () => {
    // You can post the data to backend here if needed
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Enter Internal Marks</h1>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="border p-2 rounded w-full"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleRollSubmit}
        >
          Go
        </button>
      </div>

      {marksVisible && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-center">Marks for Roll No: {rollNumber}</h2>

          <div className="grid grid-cols-2 gap-4">
            <input name="mid1" type="number" placeholder="Mid 1 Marks" className="border p-2 rounded" value={marks.mid1} onChange={handleChange} />
            <input name="mid2" type="number" placeholder="Mid 2 Marks" className="border p-2 rounded" value={marks.mid2} onChange={handleChange} />
            <input name="assignment1" type="number" placeholder="Assignment 1" className="border p-2 rounded" value={marks.assignment1} onChange={handleChange} />
            <input name="assignment2" type="number" placeholder="Assignment 2" className="border p-2 rounded" value={marks.assignment2} onChange={handleChange} />
            <input name="quiz1" type="number" placeholder="Quiz 1" className="border p-2 rounded" value={marks.quiz1} onChange={handleChange} />
            <input name="quiz2" type="number" placeholder="Quiz 2" className="border p-2 rounded" value={marks.quiz2} onChange={handleChange} />
          </div>

          <div className="mt-4 font-semibold text-lg">
            Total: {calculateTotal()}
          </div>

          <button
            className="bg-green-600 text-white px-6 py-2 rounded mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>

          {submitted && (
            <div className="text-green-700 font-medium mt-2">
              Internal marks submitted.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MarksPage;