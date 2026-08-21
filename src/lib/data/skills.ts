import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Quantitative Finance",
    blurb: "Financial engineering grounded in stochastic methods and market structure.",
    items: [
      { name: "Financial Engineering", proficiency: 78, years: 2, related: ["Derivatives Analytics", "Stochastic Modelling"] },
      { name: "Derivatives Analytics", proficiency: 68, years: 1, related: ["Financial Engineering"] },
      { name: "Stochastic Modelling", proficiency: 70, years: 1, related: ["Econometrics"] },
      { name: "Risk Modelling", proficiency: 82, years: 3, projects: ["fraud-detection"], related: ["Anomaly Detection"] },
      { name: "Portfolio & Investment Analytics", proficiency: 72, years: 2 },
    ],
  },
  {
    category: "Machine Learning",
    blurb: "From anomaly detection to production classification pipelines.",
    items: [
      { name: "Anomaly & Outlier Detection", proficiency: 90, years: 3, projects: ["fraud-detection"] },
      { name: "Supervised Classification", proficiency: 88, years: 3, projects: ["fraud-detection", "structural-defect-classification"] },
      { name: "Time-Series Forecasting", proficiency: 84, years: 3, projects: ["lstm-market-forecasting", "us-gdp-prediction"] },
      { name: "Model Validation & Monitoring", proficiency: 80, years: 3 },
    ],
  },
  {
    category: "Deep Learning",
    blurb: "Sequence models, transfer learning and policy-gradient reinforcement learning.",
    items: [
      { name: "PyTorch", proficiency: 82, years: 2, projects: ["structural-defect-classification"] },
      { name: "LSTM & Recurrent Networks", proficiency: 80, years: 2, projects: ["lstm-market-forecasting"] },
      { name: "CNNs & Transfer Learning (ResNet-18)", proficiency: 76, years: 1, projects: ["structural-defect-classification"] },
      { name: "Deep Reinforcement Learning (PPO)", proficiency: 74, years: 1, projects: ["rl-trading-agent"] },
    ],
  },
  {
    category: "Programming & Data",
    blurb: "The daily toolkit — from raw data to shipped dashboards.",
    items: [
      { name: "Python", proficiency: 92, years: 4 },
      { name: "SQL", proficiency: 86, years: 4, projects: ["sql-bi-dashboards"] },
      { name: "Power BI", proficiency: 80, years: 3 },
      { name: "Statistics & Mathematics", proficiency: 84, years: 4 },
      { name: "Optimisation", proficiency: 70, years: 2 },
    ],
  },
  {
    category: "Assurance, Cloud & Tooling",
    blurb: "The audit-and-infrastructure backbone behind the models.",
    items: [
      { name: "Financial Audit & Internal Controls", proficiency: 88, years: 5 },
      { name: "Forensic & Fraud Analytics", proficiency: 86, years: 3, projects: ["fraud-detection"] },
      { name: "Git", proficiency: 78, years: 3 },
      { name: "Docker", proficiency: 62, years: 1 },
      { name: "Linux", proficiency: 64, years: 2 },
      { name: "Cybersecurity Fundamentals", proficiency: 58, years: 1 },
    ],
  },
];
