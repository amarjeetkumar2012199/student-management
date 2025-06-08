import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentForm from './pages/StudentForm';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/form" element={<StudentForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
