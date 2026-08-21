import type { Certification } from "@/types";

/**
 * `featured` = every credential that is an official "Professional
 * Certificate" program or carries an Honors distinction — these are
 * shown first. Everything else follows below, in the same order.
 *
 * Source: Credly badge wallet (credly.com/users/allwell-godwin) plus two
 * credentials issued outside Credly (Wharton, IBM SQL w/ Honors) that
 * appear on the CV. `skills` are drawn only from Allwell's own Credly
 * Verified Skills Wallet (credly.com/users/allwell-godwin/skills) — every
 * tag here is a skill Credly has actually verified against his badges,
 * mapped back to the specific credential that evidences it.
 */
export const certifications: Certification[] = [
  // --- Professional Certificates & Honors ---
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    category: "Data Science",
    featured: true,
    skills: ["Data Science", "Python", "Machine Learning (ML)", "Data Visualization", "Jupyter Notebook", "Data Analysis", "Database Queries"],
  },
  {
    name: "IBM AI Engineering Professional Certificate",
    issuer: "IBM",
    category: "AI / ML",
    featured: true,
    skills: ["Machine Learning (ML)", "Deep Learning", "Artificial Neural Networks", "Keras Neural Network Library", "PyTorch", "TensorFlow", "Regression Analysis", "Artificial Intelligence (AI)"],
  },
  {
    name: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    category: "Data Science",
    featured: true,
    skills: ["Python", "Statistical Analysis", "Regression Analysis", "Machine Learning (ML)", "Exploratory Data Analysis", "Tableau"],
  },
  {
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    category: "Analytics & BI",
    featured: true,
    skills: ["Database Queries", "BigQuery", "Tableau", "Data Modeling", "Business Intelligence (BI)"],
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    category: "AI / ML",
    featured: true,
    honors: true,
    skills: ["Machine Learning (ML)", "Scikit-learn (Sklearn)", "Regression Analysis", "Cluster Analysis", "Recommender Systems", "Data Classification"],
  },
  {
    name: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    category: "Data Science",
    featured: true,
    honors: true,
    skills: ["Database Queries", "Database Development", "Python", "Data Management"],
  },

  // --- Others ---
  {
    name: "Foundations of Financial Engineering",
    issuer: "WorldQuant University",
    category: "Finance",
    skills: ["Quantitative Finance", "Linear Algebra", "Financial Market", "Fixed Income", "Equities", "Exchange Traded Derivatives (ETD)", "Securitization", "Financial Analysis"],
  },
  {
    name: "Business Analytics",
    issuer: "The Wharton School, University of Pennsylvania",
    category: "Finance",
    skills: ["Business Analysis", "Business Process Management (BPM)", "Financial Data Management", "Financial Data"],
  },
  {
    name: "Applied Data Science Specialization",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Python", "Data Visualization", "Matplotlib", "Seaborn", "Data Science"],
  },
  {
    name: "Applied Data Science Capstone",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Data Science", "Data Wrangling", "Exploratory Data Analysis", "Geospatial Analysis", "Data Collection"],
  },
  {
    name: "Deep Neural Networks with PyTorch",
    issuer: "IBM",
    category: "AI / ML",
    skills: ["PyTorch", "Deep Learning", "Artificial Neural Networks", "Artificial Intelligence (AI)"],
  },
  {
    name: "Deep Learning with TensorFlow",
    issuer: "IBM",
    category: "AI / ML",
    skills: ["TensorFlow", "Deep Learning", "Artificial Neural Networks"],
  },
  {
    name: "Deep Learning Essentials with Keras",
    issuer: "IBM",
    category: "AI / ML",
    skills: ["Keras Neural Network Library", "Artificial Neural Networks", "Deep Learning"],
  },
  {
    name: "Computer Vision and Image Processing Essentials",
    issuer: "IBM",
    category: "AI / ML",
    skills: ["Computer Vision", "Python", "Data Classification"],
  },
  {
    name: "Data Visualization with Python",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Matplotlib", "Seaborn", "Bokeh", "Data Visualization", "Geospatial Analysis"],
  },
  {
    name: "Statistics for Data Science with Python",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Statistics", "Statistical Analysis", "Statistical Probability", "Regression Analysis", "Python"],
  },
  {
    name: "Python for Data Science and AI",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Python", "Algorithms", "Data Science"],
  },
  {
    name: "Python Project for Data Science",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Python", "Jupyter Notebook", "Data Analysis"],
  },
  {
    name: "Data Science Methodology",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Data Science", "Data Collection", "Data Management"],
  },
  {
    name: "Tools for Data Science",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Jupyter Notebook", "RStudio", "GitHub", "IBM Cloud"],
  },
  {
    name: "Generative AI Essentials for Data Science",
    issuer: "IBM",
    category: "AI / ML",
    skills: ["Generative AI", "Data Extraction", "Machine Learning (ML)"],
  },
  {
    name: "Data Scientist Career Guide and Interview Preparation",
    issuer: "IBM",
    category: "Data Science",
    skills: ["Career Development", "Interviewing Skills", "Resume Screening"],
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    category: "Security",
    skills: ["Cybersecurity", "Cyber Defense", "Information Privacy", "Internet Protocol (IP)"],
  },
  {
    name: "Endpoint Security",
    issuer: "Cisco",
    category: "Security",
    skills: ["Network Security", "Antivirus Software", "Application Security", "Symantec Endpoint Protection", "System Integrity", "Windows Server", "Wireless Security", "Mobile Security", "Threat Detection", "Linux Servers"],
  },

  // --- MBA & leadership badges, Nexford University (Parchment) ---
  {
    name: "Data Sciences for Decision Making",
    issuer: "Nexford University",
    category: "Data Science",
  },
  {
    name: "Cybersecurity Leadership",
    issuer: "Nexford University",
    category: "Security",
  },
  {
    name: "Financial Decision Making",
    issuer: "Nexford University",
    category: "Finance",
  },
  {
    name: "Accounting and Financial Reporting",
    issuer: "Nexford University",
    category: "Finance",
  },
  {
    name: "Intro to Intrapreneurship and Innovation",
    issuer: "Nexford University",
    category: "Leadership & Business",
  },
  {
    name: "Technology Operations Management",
    issuer: "Nexford University",
    category: "Leadership & Business",
  },
  {
    name: "Global Business",
    issuer: "Nexford University",
    category: "Leadership & Business",
  },
];

export const credlyUrl = "https://www.credly.com/users/allwell-godwin";
export const credlySkillsUrl = "https://www.credly.com/users/allwell-godwin/skills";
