import React, { useState } from 'react';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { 
  FaChartLine, 
  FaChartBar, 
  FaChartPie, 
  FaCalendarAlt,
  FaDownload
} from 'react-icons/fa';
import { MdTimeline, MdShowChart } from 'react-icons/md';
import chartsData from '../data/chartsData';

ChartJS.register(...registerables);

function Charts() {
  const [timeRange, setTimeRange] = useState('1M'); // 1W, 1M, 3M, 6M, 1Y
  const [chartView, setChartView] = useState('grid'); // grid, full

  const timeRanges = ['1W', '1M', '3M', '6M', '1Y'];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <FaChartLine className="mr-2" />
                Health Analytics Dashboard
              </h1>
              <p className="text-gray-600">Comprehensive health metrics visualization</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                      timeRange === range
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              {/* View Toggle */}
              <button
                onClick={() => setChartView(chartView === 'grid' ? 'full' : 'grid')}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <MdShowChart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className={`grid ${chartView === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6' : 'grid-cols-1 gap-6'}`}>
          {/* Blood Sugar Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaChartLine className="mr-2 text-blue-600" />
                Blood Sugar Trends
              </h3>
              <button className="text-gray-400 hover:text-gray-600">
                <FaDownload />
              </button>
            </div>
            <div className="h-80">
              <Line
                data={chartsData.bloodSugar}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: false,
                      grid: {
                        drawBorder: false
                      }
                    },
                    x: {
                      grid: {
                        display: false
                      }
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Blood Pressure Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaChartBar className="mr-2 text-green-600" />
                Blood Pressure Analysis
              </h3>
              <button className="text-gray-400 hover:text-gray-600">
                <FaDownload />
              </button>
            </div>
            <div className="h-80">
              <Bar
                data={chartsData.bloodPressure}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Heart Rate Variability */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MdTimeline className="mr-2 text-red-600" />
                Heart Rate Variability
              </h3>
              <button className="text-gray-400 hover:text-gray-600">
                <FaDownload />
              </button>
            </div>
            <div className="h-80">
              <Line
                data={chartsData.heartRate}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
            </div>
          </div>

          {/* Health Metrics Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaChartPie className="mr-2 text-purple-600" />
                Health Metrics Distribution
              </h3>
              <button className="text-gray-400 hover:text-gray-600">
                <FaDownload />
              </button>
            </div>
            <div className="h-80">
              <Doughnut
                data={chartsData.healthMetrics}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {chartsData.insights.map((insight, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">{insight.label}</p>
                <p className="text-xl font-semibold text-gray-900">{insight.value}</p>
                <p className={`text-sm ${insight.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {insight.trend > 0 ? '↑' : '↓'} {Math.abs(insight.trend)}% from last {timeRange}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;