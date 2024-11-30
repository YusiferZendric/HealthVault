import React, { useState } from 'react';
import { 
  FaUserMd, 
  FaPills, 
  FaChartLine, 
  FaBrain,
  FaExclamationTriangle,
  FaHistory,
  FaUserFriends,
  FaCheckCircle,
  FaStethoscope,
  FaHospital,
  FaCertificate,
  FaCalendarCheck
} from 'react-icons/fa';
import { 
  MdTimeline, 
  MdWarning,
  MdTrendingUp,
  MdCompareArrows,
  MdPerson,
  MdLocalHospital,
  MdAssignment
} from 'react-icons/md';
import doctorData from '../../data/doctorData';

function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('drugInteractions');

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaUserMd className="w-12 h-12 text-blue-600 mr-4" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{doctorData.name}</h1>
                <p className="text-gray-600">{doctorData.specialization}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                AI Assistant Active
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex space-x-4">
            {[
              { id: 'drugInteractions', icon: <FaPills />, label: 'Drug Interactions' },
              { id: 'patientReference', icon: <FaUserFriends />, label: 'Patient Reference' },
              { id: 'riskAssessment', icon: <FaExclamationTriangle />, label: 'Risk Assessment' },
              { id: 'decisionSupport', icon: <FaBrain />, label: 'AI Decision Support' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'drugInteractions' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaPills className="mr-2" />
                  Drug Interaction Analysis
                </h2>
                {doctorData.drugInteractions.recentAnalysis.map((analysis, index) => (
                  <div key={index} className="mb-6 p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium text-lg">{analysis.patientName}</h3>
                      <div className="flex space-x-2">
                        {analysis.medications.map((med, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {med}
                          </span>
                        ))}
                      </div>
                    </div>
                    {analysis.interactions.map((interaction, idx) => (
                      <div key={idx} className={`p-4 rounded-lg mb-4 ${
                        interaction.severity === 'high' ? 'bg-red-50' :
                        interaction.severity === 'moderate' ? 'bg-yellow-50' :
                        'bg-green-50'
                      }`}>
                        <div className="flex items-center mb-2">
                          <MdWarning className={`mr-2 ${
                            interaction.severity === 'high' ? 'text-red-600' :
                            interaction.severity === 'moderate' ? 'text-yellow-600' :
                            'text-green-600'
                          }`} />
                          <span className="font-medium">{interaction.description}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Recommendation: {interaction.recommendation}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">{interaction.evidence}</span>
                          <span className="font-medium">
                            Confidence: {(interaction.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'patientReference' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaHistory className="mr-2" />
                  Similar Case Analysis
                </h2>
                {doctorData.patientReferences.similarCases.map((caseData, index) => (
                  <div key={index} className="mb-6 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg">{caseData.condition}</h3>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="text-sm">
                          Success Rate: {(caseData.successfulTreatments / caseData.totalCases * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">Total Cases</p>
                        <p className="text-2xl font-bold text-blue-600">{caseData.totalCases}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">Avg. Duration</p>
                        <p className="text-2xl font-bold text-green-600">{caseData.averageDuration}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Effective Medications</h4>
                      {caseData.effectiveMedications.map((med, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span>{med.name}</span>
                          <span className="text-sm text-gray-600">Success: {med.successRate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'riskAssessment' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaChartLine className="mr-2" />
                  Patient Risk Assessment
                </h2>
                {doctorData.riskAssessment.currentPatients.map((patient, index) => (
                  <div key={index} className="mb-6 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg">{patient.name}</h3>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        High Risk Patient
                      </span>
                    </div>
                    {patient.riskFactors.map((factor, idx) => (
                      <div key={idx} className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{factor.category}</span>
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            factor.level === 'high' ? 'bg-red-100 text-red-800' :
                            factor.level === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {factor.level} risk
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-600">
                            <strong>Contributors:</strong>
                            <ul className="list-disc list-inside ml-2">
                              {factor.contributors.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Suggestions:</strong>
                            <ul className="list-disc list-inside ml-2">
                              {factor.mitigationSuggestions.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'decisionSupport' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaBrain className="mr-2" />
                  AI Treatment Recommendations
                </h2>
                {doctorData.clinicalDecisionSupport.activePatients.map((patient, index) => (
                  <div key={index} className="mb-6 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{patient.patientName}</h3>
                        <p className="text-sm text-gray-600">{patient.condition}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Current: {patient.currentTreatment}
                      </span>
                    </div>
                    {patient.aiSuggestions.map((suggestion, idx) => (
                      <div key={idx} className="mb-4 p-4 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{suggestion.type} Suggestion</span>
                          <span className="text-sm text-blue-600">
                            Confidence: {(suggestion.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                        <p className="text-blue-800 mb-2">{suggestion.suggestion}</p>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-600">
                            <strong>Reasoning:</strong>
                            <ul className="list-disc list-inside ml-2">
                              {suggestion.reasoning.map((reason, i) => (
                                <li key={i}>{reason}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Stats & Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">AI Model Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Baseline Accuracy</span>
                  <span className="font-medium">{doctorData.clinicalDecisionSupport.modelInsights.baselineAccuracy}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Data Points</span>
                  <span className="font-medium">{doctorData.clinicalDecisionSupport.modelInsights.dataPoints}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium">{doctorData.clinicalDecisionSupport.modelInsights.lastUpdated}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full p-2 text-left hover:bg-blue-50 rounded-lg transition-colors">
                  <FaPills className="inline-block mr-2" />
                  Check Drug Interactions
                </button>
                <button className="w-full p-2 text-left hover:bg-blue-50 rounded-lg transition-colors">
                  <FaChartLine className="inline-block mr-2" />
                  View Risk Reports
                </button>
                <button className="w-full p-2 text-left hover:bg-blue-50 rounded-lg transition-colors">
                  <FaBrain className="inline-block mr-2" />
                  Get AI Recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;