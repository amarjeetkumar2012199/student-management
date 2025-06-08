import React from 'react';

// 👇 अपने StudentForm को import करें
import StudentForm from './components/StudentForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Student Admission Form</h1>

      {/* 👇 यहाँ आपका फॉर्म दिखेगा */}
      <StudentForm />
    </div>
  );
}

export default App;
