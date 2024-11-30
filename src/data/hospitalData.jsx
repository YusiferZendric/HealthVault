const hospitalData = {
  name: 'AIIMS Delhi',
  location: 'Ansari Nagar East, New Delhi, Delhi 110029',
  type: 'Government Super-Specialty Hospital',
  accreditation: ['NABH', 'NABL', 'JCI Accredited'],
  establishedYear: '1956',

  // Database Analytics
  databaseMetrics: {
    totalRecords: "1.2M+",
    activePatients: 24567,
    digitalizedRecords: "92%",
    dataAccuracy: "99.2%",
    lastBackup: "2024-03-21 02:00 AM",
    storageUtilization: "78%",
    queryResponseTime: "1.2s"
  },

  // Mortality Analytics
  mortalityMetrics: {
    overall: {
      rate: "2.1%",
      trend: "decreasing",
      benchmark: "2.8%",
      timespan: "Last 30 days"
    },
    departmentWise: [
      {
        department: "Cardiology",
        rate: "1.8%",
        cases: 450,
        trend: "stable",
        riskFactors: ["Age > 65", "Diabetes", "Hypertension"]
      },
      {
        department: "Oncology",
        rate: "4.2%",
        cases: 380,
        trend: "decreasing",
        riskFactors: ["Stage IV Cancer", "Multiple Organ Involvement"]
      },
      {
        department: "Emergency",
        rate: "3.1%",
        cases: 890,
        trend: "fluctuating",
        riskFactors: ["Trauma", "Delayed Admission"]
      }
    ],
    predictiveInsights: [
      {
        category: "High Risk",
        count: 45,
        primaryFactors: ["Multiple Comorbidities", "Age > 75"],
        recommendedActions: ["Intensive Monitoring", "Specialist Consultation"]
      }
    ]
  },

  // Readmission Analytics
  readmissionMetrics: {
    overall: {
      rate: "12.3%",
      threshold: "15%",
      trend: "improving",
      timeframe: "30 days"
    },
    riskCategories: [
      {
        level: "High",
        count: 127,
        factors: ["Incomplete Treatment", "Chronic Conditions"],
        probability: "68%"
      },
      {
        level: "Medium",
        count: 245,
        factors: ["Medication Non-compliance"],
        probability: "42%"
      }
    ],
    departmentWise: [
      {
        name: "Cardiology",
        rate: "15.2%",
        commonCauses: ["Medication Adjustment", "Lifestyle Non-compliance"]
      },
      {
        name: "Pulmonology",
        rate: "18.5%",
        commonCauses: ["COPD Exacerbation", "Respiratory Infections"]
      }
    ]
  },

  // Length of Stay Predictions
  stayPredictions: {
    averageStay: {
      overall: "5.2 days",
      medical: "4.8 days",
      surgical: "6.5 days",
      icu: "3.2 days"
    },
    departmentWise: [
      {
        department: "General Medicine",
        avgStay: "4.2 days",
        predictedOccupancy: "85%",
        bedsTurnover: "6.8 days"
      },
      {
        department: "Orthopedics",
        avgStay: "7.5 days",
        predictedOccupancy: "78%",
        bedsTurnover: "8.2 days"
      }
    ],
    costImplications: {
      averageDailyCost: "₹12,500",
      predictedMonthlySavings: "₹18.5L",
      optimizationTarget: "0.8 days"
    }
  },

  // ICU Requirement Predictions
  icuMetrics: {
    currentStatus: {
      totalBeds: 180,
      occupied: 142,
      reserved: 8,
      emergency: 30
    },
    predictions: {
      next24Hours: {
        expectedAdmissions: 12,
        expectedDischarges: 15,
        criticalCases: 4
      },
      next72Hours: {
        bedRequirement: "85%",
        staffingNeeds: "32 specialists",
        equipmentNeeds: ["5 Ventilators", "3 Dialysis Machines"]
      }
    },
    riskAssessment: [
      {
        ward: "General Ward",
        patientsCount: 245,
        criticalRisk: 12,
        monitoring: "Continuous SpO2"
      },
      {
        ward: "Post-Operative",
        patientsCount: 68,
        criticalRisk: 8,
        monitoring: "Vital Signs"
      }
    ],
    resourceOptimization: {
      staffAllocation: {
        doctors: 45,
        nurses: 120,
        technicians: 30
      },
      equipmentUtilization: "88%",
      predictedBottlenecks: ["Ventilators during peak hours", "Specialist availability on weekends"]
    }
  },

  // Real-time Stats
  currentStats: {
    bedsOccupancy: {
      total: 2800,
      occupied: 2187,
      available: 613,
      reserved: 95,
      breakdown: {
        general: { total: 1800, occupied: 1423 },
        private: { total: 600, occupied: 489 },
        icu: { total: 400, occupied: 275 }
      }
    },
    staffing: {
      onDuty: {
        doctors: 312,
        nurses: 645,
        paramedical: 234
      },
      nextShift: {
        doctors: 298,
        nurses: 612,
        paramedical: 228
      }
    },
    emergencyLoad: {
      currentPatients: 89,
      averageWaitTime: "12 mins",
      criticalCases: 15
    }
  },

  // Additional Indian Context
  governmentSchemes: {
    ayushmanBharat: {
      registeredBeneficiaries: 45678,
      activeCases: 234,
      claimsProcessed: "₹12.4 Cr",
      successRate: "94%"
    },
    cghs: {
      activePatients: 1234,
      monthlyFootfall: 3456,
      specialtyConsultations: 890
    }
  },

  certifications: [
    {
      name: "NABH",
      validUntil: "2025",
      lastAuditScore: "92%"
    },
    {
      name: "NABL",
      validUntil: "2024",
      lastAuditScore: "95%"
    }
  ],
  // Add this new section to your hospitalData object

uploadedFiles: {
  recentUploads: [
    {
      id: "DOC-2024-03-21-001",
      filename: "patient_discharge_summary_march2024.xlsx",
      department: "General Medicine",
      uploadedBy: "Dr. Sharma",
      uploadTime: "2024-03-21 14:30",
      status: "Processed",
      insights: "15 high-risk cases identified"
    },
    {
      id: "DOC-2024-03-21-002",
      filename: "icu_monitoring_logs_21032024.csv",
      department: "ICU",
      uploadedBy: "Dr. Patel",
      uploadTime: "2024-03-21 15:45",
      status: "Processing",
      insights: "Pending analysis"
    },
    {
      id: "DOC-2024-03-20-003",
      filename: "cardiology_patient_records_q1.pdf",
      department: "Cardiology",
      uploadedBy: "Dr. Gupta",
      uploadTime: "2024-03-20 09:15",
      status: "Processed",
      insights: "8 cases flagged for follow-up"
    }
  ],
  fileInsights: {
    totalProcessed: 1289,
    pendingAnalysis: 3,
    errorRate: "0.2%",
    storageUsed: "2.1 TB"
  }
},

stayPredictions: {
  activeCases: [
    {
      id: "CASE-2024-001",
      patientName: "Rajesh Kumar",
      age: 58,
      ward: "Cardiology",
      admissionDate: "2024-03-15",
      primaryDiagnosis: "Acute Myocardial Infarction",
      comorbidities: ["Diabetes", "Hypertension"],
      predictedStay: {
        days: 12,
        confidence: 0.89,
        factors: [
          "Condition severity: High",
          "Age factor",
          "Multiple comorbidities"
        ],
        readmissionRisk: "Medium",
        recommendedActions: [
          "Daily cardiac monitoring",
          "Diabetes management",
          "Physical therapy post-recovery"
        ],
        tracedFrom: [
          "cardiac_assessment_15032024.pdf",
          "blood_work_16032024.xlsx",
          "medication_history_2024.csv"
        ]
      }
    },
    {
      id: "CASE-2024-002",
      patientName: "Priya Mehta",
      age: 34,
      ward: "Obstetrics",
      admissionDate: "2024-03-20",
      primaryDiagnosis: "High-risk Pregnancy",
      comorbidities: ["Gestational Diabetes"],
      predictedStay: {
        days: 5,
        confidence: 0.92,
        factors: [
          "Regular pregnancy",
          "Controlled diabetes",
          "First pregnancy"
        ],
        readmissionRisk: "Low",
        recommendedActions: [
          "Regular sugar monitoring",
          "Fetal monitoring",
          "Nutritional counseling"
        ],
        tracedFrom: [
          "prenatal_records_20032024.pdf",
          "sugar_monitoring_log.xlsx"
        ]
      }
    },
    {
      id: "CASE-2024-003",
      patientName: "Mohammad Siddiqui",
      age: 72,
      ward: "Neurology",
      admissionDate: "2024-03-18",
      primaryDiagnosis: "Acute Ischemic Stroke",
      comorbidities: ["Atrial Fibrillation", "Hypertension"],
      predictedStay: {
        days: 15,
        confidence: 0.85,
        factors: [
          "Condition severity: High",
          "Age factor",
          "Multiple comorbidities"
        ],
        readmissionRisk: "High",
        recommendedActions: [
          "Intensive physiotherapy",
          "Anticoagulation monitoring",
          "Speech therapy"
        ],
        tracedFrom: [
          "ct_scan_18032024.dicom",
          "neuro_assessment_19032024.pdf",
          "medication_chart.xlsx"
        ]
      }
    },
    {
      id: "CASE-2024-004",
      patientName: "Anjali Singh",
      age: 45,
      ward: "Oncology",
      admissionDate: "2024-03-19",
      primaryDiagnosis: "Breast Cancer - Stage 2",
      comorbidities: ["Anemia"],
      predictedStay: {
        days: 7,
        confidence: 0.90,
        factors: [
          "Chemotherapy cycle",
          "Good response to treatment",
          "Moderate side effects"
        ],
        readmissionRisk: "Medium",
        recommendedActions: [
          "Regular CBC monitoring",
          "Nutritional support",
          "Side effect management"
        ],
        tracedFrom: [
          "oncology_report_19032024.pdf",
          "chemo_protocol.pdf",
          "blood_work_20032024.xlsx"
        ]
      }
    },
    {
      id: "CASE-2024-005",
      patientName: "Suresh Patel",
      age: 62,
      ward: "Pulmonology",
      admissionDate: "2024-03-17",
      primaryDiagnosis: "COPD Exacerbation",
      comorbidities: ["Bronchial Asthma", "Hypertension"],
      predictedStay: {
        days: 9,
        confidence: 0.87,
        factors: [
          "Severe exacerbation",
          "Previous admission history",
          "Weather factors"
        ],
        readmissionRisk: "High",
        recommendedActions: [
          "Pulmonary rehabilitation",
          "Inhaler technique review",
          "Home oxygen assessment"
        ],
        tracedFrom: [
          "pulmonary_function_test.pdf",
          "admission_notes_17032024.pdf",
          "previous_discharge_summary.xlsx"
        ]
      }
    }
  ],
  averageStay: {
    cardiology: "8.5 days",
    neurology: "12.3 days",
    oncology: "6.8 days",
    pulmonology: "9.2 days",
    obstetrics: "4.5 days"
  }
},

readmissionMetrics: {
  riskGroups: {
    high: 15,
    medium: 25,
    low: 60
  },
  recentCases: [
    {
      id: "RA-2024-001",
      name: "Amit Patel",
      diagnosis: "Post-operative Care - CABG",
      risk: "High",
      probability: 78,
      factors: [
        "Previous admissions",
        "Multiple comorbidities",
        "Age factor"
      ]
    },
    {
      id: "RA-2024-002",
      name: "Priya Singh",
      diagnosis: "Diabetic Complications",
      risk: "Medium",
      probability: 45,
      factors: [
        "Uncontrolled diabetes",
        "Hypertension"
      ]
    },
    {
      id: "RA-2024-003",
      name: "Rajesh Kumar",
      diagnosis: "COPD Exacerbation",
      risk: "High",
      probability: 82,
      factors: [
        "Smoking history",
        "Previous hospitalizations",
        "Winter season"
      ]
    },
    {
      id: "RA-2024-004",
      name: "Meera Reddy",
      diagnosis: "Heart Failure",
      risk: "Medium",
      probability: 52,
      factors: [
        "Medication adherence issues",
        "Diet control"
      ]
    },
    {
      id: "RA-2024-005",
      name: "Suresh Iyer",
      diagnosis: "Post-surgical Recovery",
      risk: "Low",
      probability: 15,
      factors: [
        "Good recovery progress",
        "Strong support system"
      ]
    }
  ],
  departmentWise: {
    cardiology: {
      rate: "22%",
      trend: "↑ 3% this month"
    },
    pulmonology: {
      rate: "18%",
      trend: "↓ 2% this month"
    },
    neurology: {
      rate: "12%",
      trend: "→ Stable"
    },
    orthopedics: {
      rate: "8%",
      trend: "↓ 1% this month"
    }
  },
  monthlyTrend: [
    { month: "Jan", rate: 15 },
    { month: "Feb", rate: 14 },
    { month: "Mar", rate: 16 },
    { month: "Apr", rate: 15 },
    { month: "May", rate: 13 },
    { month: "Jun", rate: 14 }
  ]
},

};


export default hospitalData;