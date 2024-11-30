const chartsData = {
  bloodSugar: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Fasting Blood Sugar',
        data: [95, 92, 89, 88, 85, 82, 80],
        borderColor: 'rgba(59, 130, 246, 1)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Post-meal Blood Sugar',
        data: [140, 135, 130, 128, 125, 122, 120],
        borderColor: 'rgba(147, 51, 234, 1)',
        tension: 0.4,
        fill: false
      }
    ]
  },

  bloodPressure: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 115, 117, 116, 114, 113],
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
      },
      {
        label: 'Diastolic',
        data: [80, 78, 76, 77, 75, 74, 73],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
      }
    ]
  },

  heartRate: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Resting Heart Rate',
        data: [68, 65, 72, 70, 68, 66, 65],
        borderColor: 'rgba(239, 68, 68, 1)',
        tension: 0.4,
        fill: false
      }
    ]
  },

  healthMetrics: {
    labels: ['Exercise', 'Diet', 'Sleep', 'Stress', 'Hydration'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(59, 130, 246, 0.6)',
        'rgba(34, 197, 94, 0.6)',
        'rgba(147, 51, 234, 0.6)',
        'rgba(239, 68, 68, 0.6)',
        'rgba(245, 158, 11, 0.6)'
      ]
    }]
  },

  insights: [
    {
      label: 'Average Blood Sugar',
      value: '95 mg/dL',
      trend: -5.2
    },
    {
      label: 'Average Blood Pressure',
      value: '118/76 mmHg',
      trend: -2.8
    },
    {
      label: 'Average Heart Rate',
      value: '68 BPM',
      trend: 1.5
    }
  ]
};

export default chartsData;