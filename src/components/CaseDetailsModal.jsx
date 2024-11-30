import React from 'react';
import { 
  FaFilePdf, 
  FaFileExcel, 
  FaFileMedical, 
  FaFileAlt,
  FaCalendarAlt,
  FaUserInjured,
  FaChartLine,
  FaExclamationTriangle,
  FaCheckCircle,
  FaNotesMedical,
  FaClock,
  FaHospital
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

function CaseDetailsModal({ caseData, onClose }) {
  if (!caseData) return null;

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-lg bg-white">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Patient Details
            </h2>
            <p className="text-gray-600">ID: {caseData.id}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FaUserInjured className="mr-2" />
                Patient Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">{caseData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Diagnosis</span>
                  <span className="font-medium">{caseData.diagnosis}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FaChartLine className="mr-2" />
                Risk Assessment
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Risk Level</span>
                  <span className={`px-3 py-1 rounded-full font-medium ${getRiskColor(caseData.risk)}`}>
                    {caseData.risk}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Probability</span>
                  <span className="font-medium">{caseData.probability}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FaNotesMedical className="mr-2" />
                Contributing Factors
              </h3>
              <div className="space-y-2">
                {caseData.factors?.map((factor, index) => (
                  <div key={index} className="flex items-center p-2 bg-white rounded-lg">
                    <FaExclamationTriangle className="mr-2 text-yellow-500" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {caseData.additionalInfo && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FaHospital className="mr-2" />
                  Additional Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Department</span>
                    <span className="font-medium">{caseData.additionalInfo.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Discharge</span>
                    <span className="font-medium">{caseData.additionalInfo.lastDischarge}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetailsModal;