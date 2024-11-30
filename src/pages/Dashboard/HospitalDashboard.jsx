import React, { useState } from 'react';
import { 
  FaHospital, 
  FaDatabase, 
  FaChartLine, 
  FaBed, 
  FaUserMd,
  FaCalendarCheck,
  FaExclamationTriangle,
  FaFileAlt,
  FaFileMedical,
  FaFilePdf,
  FaFileExcel,
  FaFileCode,
  FaClock,
  FaUserInjured,
  FaHospitalUser,
  FaChartBar,
  FaPercent
} from 'react-icons/fa';
import { 
  MdTimeline, 
  MdTrendingUp,
  MdWarning,
  MdHealthAndSafety,
  MdOpenInNew
} from 'react-icons/md';
import hospitalData from '../../data/hospitalData';
import CaseDetailsModal from '../../components/CaseDetailsModal';

function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState('database');
  const [selectedCase, setSelectedCase] = useState(null);
  const [showCaseModal, setShowCaseModal] = useState(false);

  const navigationTabs = [
    { id: 'database', icon: <FaDatabase />, label: 'Database Analytics', color: 'blue' },
    { id: 'mortality', icon: <FaChartLine />, label: 'Mortality Analysis', color: 'red' },
    { id: 'readmission', icon: <FaCalendarCheck />, label: 'Readmission', color: 'yellow' },
    { id: 'los', icon: <FaBed />, label: 'Length of Stay', color: 'green' },
    { id: 'icu', icon: <FaUserMd />, label: 'ICU Prediction', color: 'purple' }
  ];

  const getFileIcon = (filename) => {
    if (filename.endsWith('.pdf')) return <FaFilePdf className="text-red-500" />;
    if (filename.endsWith('.xlsx') || filename.endsWith('.csv')) return <FaFileExcel className="text-green-500" />;
    if (filename.endsWith('.dicom')) return <FaFileMedical className="text-blue-500" />;
    return <FaFileAlt className="text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaHospital className="w-12 h-12 text-blue-600 mr-4" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{hospitalData.name}</h1>
                <p className="text-gray-600">{hospitalData.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {hospitalData.type}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex space-x-4 overflow-x-auto">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? `bg-${tab.color}-50 text-${tab.color}-600` 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Database Analytics */}
            {activeTab === 'database' && (
              <>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <FaDatabase className="mr-2" />
                    Database Simplification
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-medium text-blue-900 mb-2">Processing Status</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Total Records</span>
                          <span className="font-medium">{hospitalData.databaseMetrics?.totalRecords}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Digitalized</span>
                          <span className="font-medium">{hospitalData.databaseMetrics?.digitalizedRecords}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-medium text-green-900 mb-2">Performance Metrics</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Query Response</span>
                          <span className="font-medium">{hospitalData.databaseMetrics?.queryResponseTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accuracy</span>
                          <span className="font-medium">{hospitalData.databaseMetrics?.dataAccuracy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {hospitalData.uploadedFiles.recentUploads.map((file) => (
                      <div key={file.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {getFileIcon(file.filename)}
                            <div className="ml-3">
                              <p className="font-medium text-gray-900">{file.filename}</p>
                              <p className="text-sm text-gray-500">
                                {file.department} • Uploaded by {file.uploadedBy}
                              </p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            file.status === 'Processed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {file.status}
                          </span>
                        </div>
                        {file.insights && (
                          <div className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">AI Insights:</span> {file.insights}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
                        {/* Mortality Analysis */}
                        {activeTab === 'mortality' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaChartBar className="mr-2" />
                  Mortality Rate Assessment
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Overall Statistics</h3>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {hospitalData.mortalityMetrics?.overall.rate}
                    </div>
                    <div className="flex items-center text-sm text-red-800">
                      <FaChartLine className="mr-1" />
                      Trend: {hospitalData.mortalityMetrics?.overall.trend}
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-900 mb-2">Department Analysis</h3>
                    <div className="space-y-2">
                      {hospitalData.mortalityMetrics?.departmentWise.slice(0, 3).map((dept, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{dept.department}</span>
                          <span className="font-medium">{dept.rate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {hospitalData.mortalityMetrics?.departmentWise.map((dept, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{dept.department}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          parseFloat(dept.rate) > 3 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {dept.rate}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Total Cases</p>
                          <p className="font-medium">{dept.cases}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Trend</p>
                          <p className="font-medium">{dept.trend}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Risk Factors:</p>
                        <div className="flex flex-wrap gap-2">
                          {dept.riskFactors.map((factor, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                              {factor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Readmission Probability */}
        
{/* Readmission Probability */}
{activeTab === 'readmission' && (
  <div className="lg:col-span-2 space-y-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <FaCalendarCheck className="mr-2" />
        Readmission Probability Analysis
      </h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-medium text-red-900 mb-2">High Risk</h3>
          <div className="text-3xl font-bold text-red-600 mb-2">
            {hospitalData.readmissionMetrics?.riskGroups?.high || 0}%
          </div>
          <p className="text-sm text-red-800">of total patients</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-medium text-yellow-900 mb-2">Medium Risk</h3>
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {hospitalData.readmissionMetrics?.riskGroups?.medium || 0}%
          </div>
          <p className="text-sm text-yellow-800">of total patients</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-900 mb-2">Low Risk</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">
            {hospitalData.readmissionMetrics?.riskGroups?.low || 0}%
          </div>
          <p className="text-sm text-green-800">of total patients</p>
        </div>
      </div>

      {/* Department Stats */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Department Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(hospitalData.readmissionMetrics?.departmentWise || {}).map(([dept, stats]) => (
            <div key={dept} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium capitalize mb-2">{dept}</h4>
              <div className="text-lg font-bold text-gray-900">{stats.rate}</div>
              <p className="text-sm text-gray-600">{stats.trend}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Cases List */}
      <div>
        <h3 className="text-lg font-medium mb-4">Recent Cases</h3>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {hospitalData.readmissionMetrics?.recentCases?.map((patient) => (
            <div 
              key={patient.id} 
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
              onClick={() => {
                setSelectedCase({
                  ...patient,
                  type: 'readmission',
                  additionalInfo: {
                    department: patient.department || 'General',
                    admissionDate: patient.admissionDate || 'Not specified',
                    lastDischarge: patient.lastDischarge || 'Not available'
                  }
                });
                setShowCaseModal(true);
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg text-gray-900">
                    {patient.name}
                    <span className="ml-2 text-sm text-gray-500">ID: {patient.id}</span>
                  </h3>
                  <p className="text-sm text-gray-600">{patient.diagnosis}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      patient.risk === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : patient.risk === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {patient.probability}% Risk
                    </span>
                  </div>
                </div>
                <MdOpenInNew className="text-gray-400" />
              </div>
              
              <div className="mt-3">
                <p className="text-sm text-gray-600">Contributing Factors:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {patient.factors?.map((factor, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

{/* Case Details Modal */}
{showCaseModal && selectedCase && (
  <CaseDetailsModal 
    caseData={selectedCase}
    onClose={() => {
      setShowCaseModal(false);
      setSelectedCase(null);
    }}
  />
)}
                        {/* Length of Stay Prediction */}
                        {activeTab === 'los' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaBed className="mr-2" />
                  Length of Stay Prediction
                </h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {hospitalData.stayPredictions.activeCases.map((caseData) => (
                    <div 
                      key={caseData.id} 
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedCase(caseData);
                        setShowCaseModal(true);
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg text-gray-900">
                            {caseData.patientName}
                            <span className="ml-2 text-sm text-gray-500">({caseData.age} yrs)</span>
                          </h3>
                          <p className="text-sm text-gray-600">{caseData.ward} • {caseData.primaryDiagnosis}</p>
                          <div className="mt-2 flex items-center space-x-4">
                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Predicted Stay: {caseData.predictedStay.days} days
                            </span>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              caseData.predictedStay.readmissionRisk === 'High' 
                                ? 'bg-red-100 text-red-800'
                                : caseData.predictedStay.readmissionRisk === 'Medium'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              Readmission: {caseData.predictedStay.readmissionRisk}
                            </span>
                          </div>
                        </div>
                        <MdOpenInNew className="text-gray-400" />
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-600">Comorbidities:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {caseData.comorbidities.map((condition, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                              {condition}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

// Replace the ICU tab section with this updated code
{activeTab === 'icu' && (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-6 flex items-center">
      <FaHospitalUser className="mr-2" />
      ICU Requirement Prediction
    </h2>
    
    {/* Current Status */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-medium text-purple-900 mb-2">Current Occupancy</h3>
        <div className="text-3xl font-bold text-purple-600 mb-2">
          {Math.round((hospitalData.icuMetrics.currentStatus.occupied / 
            hospitalData.icuMetrics.currentStatus.totalBeds) * 100)}%
        </div>
        <p className="text-sm text-purple-800">
          {hospitalData.icuMetrics.currentStatus.occupied} of {hospitalData.icuMetrics.currentStatus.totalBeds} beds
        </p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">Next 24h Prediction</h3>
        <div className="text-3xl font-bold text-blue-600 mb-2">
          {hospitalData.icuMetrics.predictions.next24Hours.expectedAdmissions}
        </div>
        <p className="text-sm text-blue-800">Expected Admissions</p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-medium text-green-900 mb-2">Emergency Capacity</h3>
        <div className="text-3xl font-bold text-green-600 mb-2">
          {hospitalData.icuMetrics.currentStatus.emergency}
        </div>
        <p className="text-sm text-green-800">Emergency Beds</p>
      </div>
    </div>

    {/* Risk Assessment */}
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-4">Ward Risk Assessment</h3>
      <div className="space-y-4">
        {hospitalData.icuMetrics.riskAssessment.map((ward, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{ward.ward}</h4>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                {ward.criticalRisk} Critical
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Patients</p>
                <p className="font-medium">{ward.patientsCount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monitoring</p>
                <p className="font-medium">{ward.monitoring}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Resource Optimization */}
    <div>
      <h3 className="text-lg font-medium mb-4">Resource Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-3">Staff Allocation</h4>
          <div className="space-y-2">
            {Object.entries(hospitalData.icuMetrics.resourceOptimization.staffAllocation).map(([role, count]) => (
              <div key={role} className="flex justify-between">
                <span className="capitalize">{role}</span>
                <span className="font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-3">Equipment Utilization</h4>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {hospitalData.icuMetrics.resourceOptimization.equipmentUtilization}
          </div>
          <p className="text-sm text-gray-600">Current Usage Rate</p>
        </div>
      </div>
    </div>
  </div>
)}
          
                    </div>

          {/* Right Column - Stats & Metrics */}
          <div className="space-y-6">
            {/* ... Your existing right column code ... */}
          </div>
        </div>
      </div>

      {/* Case Details Modal */}
      {showCaseModal && selectedCase && (
        <CaseDetailsModal 
          caseData={selectedCase} 
          onClose={() => {
            setShowCaseModal(false);
            setSelectedCase(null);
          }} 
        />
      )}
    </div>
  );
}

export default HospitalDashboard;