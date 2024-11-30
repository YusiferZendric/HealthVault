const patientData = {
  user: {
    name: "Rahul Sharma",
    age: 45,
    profilePic: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234F46E5'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E",
    joinedDate: "January 2024"
  },
  healthTimeline: {
    events: [
      {
        id: 1,
        date: "2024-03-15",
        type: "test",
        category: "Lab Test",
        title: "Comprehensive Blood Work",
        description: "Regular quarterly blood test",
        outcome: "Normal results with vitamin D deficiency",
        significance: "medium",
        icon: "🔬",
        details: {
          keyMetrics: [
            { name: "Vitamin D", value: "18 ng/mL", status: "low" },
            { name: "Blood Sugar", value: "92 mg/dL", status: "normal" }
          ],
          recommendations: ["Increase sun exposure", "Consider supplements"]
        }
      },
      {
        id: 2,
        date: "2024-03-10",
        type: "appointment",
        category: "Specialist Visit",
        title: "Cardiology Consultation",
        description: "Regular heart checkup",
        outcome: "Mild hypertension noted",
        significance: "high",
        icon: "❤️",
        details: {
          keyMetrics: [
            { name: "Blood Pressure", value: "138/88 mmHg", status: "elevated" }
          ],
          recommendations: ["Reduce salt intake", "Start morning walks"]
        }
      },
      {
        id: 3,
        date: "2024-02-28",
        type: "medication",
        category: "Prescription",
        title: "New Medication Started",
        description: "Blood pressure medication initiated",
        outcome: "Monitoring phase",
        significance: "high",
        icon: "💊",
        details: {
          medication: "Amlodipine 5mg",
          duration: "Daily for 3 months",
          sideEffects: "None reported"
        }
      },
      {
        id: 4,
        date: "2024-02-15",
        type: "lifestyle",
        category: "Wellness",
        title: "Started Exercise Program",
        description: "Joined morning yoga classes",
        outcome: "Improved flexibility noted",
        significance: "medium",
        icon: "🧘‍♂️",
        details: {
          frequency: "3 times per week",
          duration: "45 minutes per session",
          benefits: ["Better sleep", "Reduced stress"]
        }
      },
      {
        id: 5,
        date: "2024-02-01",
        type: "vaccination",
        category: "Preventive Care",
        title: "Annual Flu Shot",
        description: "Seasonal influenza vaccination",
        outcome: "Completed",
        significance: "low",
        icon: "💉",
        details: {
          vaccine: "Quadrivalent Influenza Vaccine",
          nextDue: "February 2025"
        }
      },
      {
        id: 6,
        date: "2024-01-15",
        type: "diet",
        category: "Nutrition",
        title: "Diet Plan Modification",
        description: "Switched to low-sodium diet",
        outcome: "In progress",
        significance: "medium",
        icon: "🥗",
        details: {
          changes: ["Reduced processed foods", "Increased vegetables"],
          goals: ["Lower blood pressure", "Weight management"]
        }
      }
    ],
    
    timelineStats: {
      totalEvents: 6,
      significantEvents: 2,
      completedActions: 4,
      pendingActions: 2
    },
    
    categories: [
      { name: "Lab Test", color: "#60A5FA" },
      { name: "Specialist Visit", color: "#F87171" },
      { name: "Medication", color: "#34D399" },
      { name: "Lifestyle", color: "#A78BFA" },
      { name: "Preventive Care", color: "#FBBF24" },
      { name: "Nutrition", color: "#EC4899" }
    ]
  },
  uploadedDocuments: {
    recent: [
      {
        id: "doc1",
        name: "Blood Test Report - March 2024",
        type: "Laboratory",
        date: "2024-03-15",
        insights: {
          summary: "Overall healthy profile with slight vitamin D deficiency",
          keyFindings: [
            {
              parameter: "Vitamin D",
              value: "18 ng/mL",
              status: "low",
              recommendation: "Consider 15 minutes of morning sunlight exposure 🌞",
              trend: "decreasing"
            },
            {
              parameter: "Blood Sugar (Fasting)",
              value: "92 mg/dL",
              status: "normal",
              emoji: "✅",
              trend: "stable"
            }
          ]
        }
      },
      {
        id: "doc2",
        name: "Cardiology Consultation",
        type: "Clinical Notes",
        date: "2024-03-10",
        insights: {
          summary: "Mild hypertension noted, lifestyle changes recommended",
          keyFindings: [
            {
              parameter: "Blood Pressure",
              value: "138/88 mmHg",
              status: "borderline",
              recommendation: "Reduce salt intake and consider morning walks 🚶‍♂️",
              trend: "increasing"
            }
          ]
        }
      }
    ]
  },

  mlInsights: {
    healthScore: 85,
    trends: {
      improving: [
        {
          metric: "Exercise Routine",
          message: "Your consistency has improved by 40% 💪",
          recommendation: "Keep up the good work! Try adding 5 minutes each week"
        }
      ],
      needsAttention: [
        {
          metric: "Sleep Pattern",
          message: "Irregular sleep times detected 😴",
          recommendation: "Try maintaining a consistent sleep schedule"
        }
      ]
    },
    predictions: {
      hospitalStay: {
        probability: "low",
        message: "Your current health metrics suggest low risk of hospitalization",
        confidence: 0.89
      }
    }
  },

  communityEngagement: {
    groups: [
      {
        name: "Healthy Heart Club",
        members: 234,
        recentActivity: "New diet tips shared"
      },
      {
        name: "Wellness Warriors",
        members: 156,
        recentActivity: "Weekly challenge started"
      }
    ],
    personalStats: {
      postsShared: 12,
      peopleHelped: 8,
      kudosReceived: 45
    }
  },


  aiGeneratedInsights: {
    documentSummaries: [
      {
        title: "Recent Health Trends",
        content: "Based on your last 3 blood tests, your cholesterol levels have improved by 15%. This correlates well with your reported increase in physical activity. 🎯",
        confidence: 0.92
      },
      {
        title: "Medication Analysis",
        content: "Your adherence to prescribed medications has been consistent. The morning dose timing could be optimized for better results. ⏰",
        confidence: 0.88
      }
    ],
    recommendations: [
      {
        category: "Diet",
        suggestion: "Consider adding more leafy greens to support your vitamin D absorption",
        reasoning: "Based on your recent blood work and successful cases",
        confidence: 0.85
      }
    ]
  }
};

export default patientData;