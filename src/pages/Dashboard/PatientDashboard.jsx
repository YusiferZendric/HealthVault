import React, { useState } from "react";
import {
  FaFileUpload,
  FaRobot,
  FaUsers,
  FaChartLine,
  FaFileAlt,
  FaLightbulb,
  FaBrain,
  FaComments,
} from "react-icons/fa";
import {
  MdTimeline,
  MdInsights,
  MdTrendingUp,
  MdNotifications,
} from "react-icons/md";
import { Line } from "react-chartjs-2";
import patientData from "../../data/patientData";

function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("documents");

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={patientData.user.profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome back, {patientData.user.name}
                </h1>
                <p className="text-gray-600">
                  Member since {patientData.user.joinedDate}
                </p>
              </div>
            </div>
            <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              <FaFileUpload className="mr-2" />
              Upload Document
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex space-x-4">
            {[
              { id: "documents", icon: <FaFileAlt />, label: "My Documents" },
              { id: "insights", icon: <FaBrain />, label: "AI Insights" },
              { id: "community", icon: <FaUsers />, label: "Community" },
              {
                id: "timeline",
                icon: <MdTimeline />,
                label: "Health Timeline",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === "timeline" && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <MdTimeline className="mr-2" />
              Health Timeline
            </h2>

            {/* Timeline Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {Object.entries(patientData.healthTimeline.timelineStats).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 rounded-lg p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-blue-600">{value}</p>
                    <p className="text-sm text-gray-600">
                      {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Timeline */}
            <div className="relative">
              {patientData.healthTimeline.events.map((event, index) => (
                <div key={event.id} className="mb-8 flex">
                  {/* Timeline Line */}
                  <div className="absolute top-0 left-8 h-full w-0.5 bg-gray-200" />

                  {/* Event Icon */}
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-blue-500 z-10">
                    <span className="text-2xl">{event.icon}</span>
                  </div>

                  {/* Event Content */}
                  <div className="ml-6 flex-1">
                    <div
                      className={`p-4 rounded-lg ${
                        event.significance === "high"
                          ? "bg-red-50"
                          : event.significance === "medium"
                          ? "bg-yellow-50"
                          : "bg-green-50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-lg">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <span
                          className="px-2 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor:
                              patientData.healthTimeline.categories.find(
                                (cat) => cat.name === event.category
                              )?.color + "20",
                            color: patientData.healthTimeline.categories.find(
                              (cat) => cat.name === event.category
                            )?.color,
                          }}
                        >
                          {event.category}
                        </span>
                      </div>

                      <p className="text-gray-700">{event.description}</p>

                      {event.details && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          {event.details.keyMetrics && (
                            <div className="flex flex-wrap gap-2">
                              {event.details.keyMetrics.map((metric, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 rounded-full text-xs ${
                                    metric.status === "normal"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {metric.name}: {metric.value}
                                </span>
                              ))}
                            </div>
                          )}

                          {event.details.recommendations && (
                            <div className="mt-2 text-sm text-gray-600">
                              <strong>Recommendations:</strong>
                              <ul className="list-disc list-inside ml-2">
                                {event.details.recommendations.map(
                                  (rec, idx) => (
                                    <li key={idx}>{rec}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Document Management */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === "documents" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
                <div className="space-y-4">
                  {patientData.uploadedDocuments.recent.map((doc, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium text-lg">{doc.name}</h3>
                          <p className="text-sm text-gray-500">
                            {doc.type} • {doc.date}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                            <MdInsights />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded">
                            <FaFileAlt />
                          </button>
                        </div>
                      </div>
                      {doc.insights && (
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-blue-900 mb-2">
                            AI Insights
                          </p>
                          <p className="text-sm text-blue-800">
                            {doc.insights.summary}
                          </p>
                          <div className="mt-3 space-y-2">
                            {doc.insights.keyFindings.map((finding, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between text-sm"
                              >
                                <span>
                                  {finding.parameter}: {finding.value}
                                </span>
                                <span
                                  className={`px-2 py-1 rounded-full ${
                                    finding.status === "normal"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {finding.recommendation}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "insights" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <FaRobot className="mr-2" />
                    AI-Generated Insights
                  </h2>
                  {patientData.aiGeneratedInsights.documentSummaries.map(
                    (insight, index) => (
                      <div
                        key={index}
                        className="mb-4 p-4 bg-blue-50 rounded-lg"
                      >
                        <h3 className="font-medium text-blue-900">
                          {insight.title}
                        </h3>
                        <p className="mt-2 text-blue-800">{insight.content}</p>
                        <div className="mt-2 text-sm text-blue-600">
                          Confidence: {(insight.confidence * 100).toFixed(1)}%
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "community" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Your Communities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {patientData.communityEngagement.groups.map(
                    (group, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h3 className="font-medium">{group.name}</h3>
                        <p className="text-sm text-gray-500">
                          {group.members} members
                        </p>
                        <p className="text-sm text-blue-600 mt-2">
                          {group.recentActivity}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Stats & Timeline */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Health Score</h2>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">
                      {patientData.mlInsights.healthScore}
                    </span>
                  </div>
                  {/* Add circular progress bar here */}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Trending Insights</h2>
              <div className="space-y-4">
                {patientData.mlInsights.trends.improving.map((trend, index) => (
                  <div key={index} className="p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 font-medium">{trend.metric}</p>
                    <p className="text-sm text-green-600">{trend.message}</p>
                  </div>
                ))}
                {patientData.mlInsights.trends.needsAttention.map(
                  (trend, index) => (
                    <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-yellow-800 font-medium">
                        {trend.metric}
                      </p>
                      <p className="text-sm text-yellow-600">{trend.message}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
