import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PatientDashboard from './pages/Dashboard/PatientDashboard';
import DoctorDashboard from './pages/Dashboard/DoctorDashboard';
import HospitalDashboard from './pages/Dashboard/HospitalDashboard';
import Documents from './pages/Documents';
import Charts from './pages/Charts';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/hospital" element={<HospitalDashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Layout>
  );
}

export default App;