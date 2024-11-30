const doctorData = {
  name: 'Dr. Jane Smith',
  specialization: 'Cardiologist',
  id: 'DOC-123456',
  drugInteractions: {
    recentAnalysis: [
      {
        patientName: "Rahul Sharma",
        medications: ["Lisinopril", "Metformin"],
        interactions: [
          {
            severity: "high",
            description: "Potential hypotension risk",
            recommendation: "Consider dose adjustment",
            evidence: "Based on 15 clinical studies",
            confidence: 0.92
          }
        ],
        alternativeRecommendations: [
          {
            drug: "Losartan",
            reason: "Lower interaction risk",
            confidence: 0.89
          }
        ]
      }
    ],
    commonInteractions: [
      {
        drugPair: ["Metformin", "ACE Inhibitors"],
        riskLevel: "moderate",
        occurrenceRate: "15%",
        monitoringRequired: ["Blood pressure", "Kidney function"]
      }
    ]
  },

  patientReferences: {
    similarCases: [
      {
        condition: "Hypertension with Diabetes",
        totalCases: 45,
        successfulTreatments: 42,
        averageDuration: "6 months",
        effectiveMedications: [
          {
            name: "Lisinopril",
            successRate: "92%",
            averageDose: "10mg"
          }
        ],
        commonComplications: [
          {
            issue: "Dry cough",
            frequency: "15%",
            resolution: "Switched to ARBs"
          }
        ]
      }
    ],
    treatmentOutcomes: {
      successRates: {
        medication: "85%",
        lifestyle: "72%",
        combined: "94%"
      },
      averageRecoveryTime: "4.5 months"
    }
  },

  riskAssessment: {
    currentPatients: [
      {
        patientId: "P-1234",
        name: "Rahul Sharma",
        riskFactors: [
          {
            category: "Cardiovascular",
            level: "high",
            contributors: ["Family history", "Hypertension"],
            mitigationSuggestions: [
              "Daily blood pressure monitoring",
              "Low sodium diet"
            ]
          }
        ],
        predictedOutcomes: {
          shortTerm: {
            risk: "moderate",
            timeline: "3 months",
            keyFactors: ["Medication adherence", "Lifestyle changes"]
          },
          longTerm: {
            risk: "high",
            timeline: "5 years",
            preventiveActions: ["Regular exercise", "Diet modification"]
          }
        }
      }
    ],
    populationMetrics: {
      ageGroups: {
        "40-50": { riskLevel: "moderate", count: 45 },
        "51-60": { riskLevel: "high", count: 62 },
        "61+": { riskLevel: "very high", count: 38 }
      }
    }
  },

  clinicalDecisionSupport: {
    activePatients: [
      {
        patientName: "Rahul Sharma",
        condition: "Hypertension",
        currentTreatment: "Lisinopril 10mg",
        aiSuggestions: [
          {
            type: "Medication",
            suggestion: "Consider increasing dose to 20mg",
            reasoning: [
              "Blood pressure remains elevated",
              "No side effects reported",
              "Similar cases showed better control with 20mg"
            ],
            confidence: 0.88,
            supportingEvidence: {
              clinicalTrials: 3,
              successRate: "78%"
            }
          },
          {
            type: "Lifestyle",
            suggestion: "Recommend DASH diet",
            reasoning: [
              "Shown effective in similar cases",
              "Patient's dietary assessment indicates high sodium intake"
            ],
            confidence: 0.92
          }
        ],
        predictedOutcomes: [
          {
            scenario: "Current treatment",
            probability: "65% success rate",
            timeframe: "6 months"
          },
          {
            scenario: "With suggested changes",
            probability: "85% success rate",
            timeframe: "4 months"
          }
        ]
      }
    ],
    
    modelInsights: {
      baselineAccuracy: "89%",
      dataPoints: "1.2M patient records",
      lastUpdated: "2024-03-15",
      specialtyFocus: ["Cardiology", "Endocrinology"]
    }
  }
};

export default doctorData;