import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "portfolio-risk-analysis",
    title: "Multivariate Portfolio Risk Analysis Pipeline",
    category: "Quantitative Finance",
    summary:
      "An end-to-end multi-asset portfolio risk system spanning statistical validation, causal-network structure, regime detection, volatility forecasting and Monte Carlo VaR/CVaR with out-of-sample validation.",
    problem:
      "Diversifying across equities, crypto, oil, FX and international names requires understanding how assets are statistically linked and how that dependency structure shifts between calm, crisis and recovery regimes — a single static correlation matrix hides both.",
    approach:
      "Built a sequential pipeline: returns construction and cleaning, multicollinearity (VIF) and correlation analysis, stationarity testing (Augmented Dickey-Fuller), a conditional Granger-causality network fitted over a VAR model, Markov-switching regime detection, GARCH volatility forecasting, then Monte Carlo portfolio simulation with weight optimisation, Value at Risk and Expected Shortfall (CVaR). Added time-ordered out-of-sample validation and scenario-based Monte Carlo to test the estimates outside the fitting window.",
    methods: [
      "Time-series econometrics (ADF, VAR)",
      "Granger-causality networks",
      "Markov-switching regime models",
      "GARCH volatility modelling",
      "Monte Carlo simulation",
      "Portfolio optimisation (VaR / CVaR)",
    ],
    tech: ["Python", "statsmodels", "arch", "NumPy / pandas", "NetworkX", "Matplotlib"],
    metrics: [
      { label: "Asset universe", value: "~48 series across 6 asset classes + macro" },
      { label: "Risk measures", value: "VaR, Expected Shortfall (CVaR)" },
      { label: "Validation", value: "Time-ordered out-of-sample split" },
    ],
    lessons:
      "In-sample VaR and minimum-variance weights flattered the portfolio; the time-ordered out-of-sample check exposed how much the regime and volatility structure drifts, which is where the real risk sits.",
    future: "Wire the pipeline to a live data feed and turn the scenario engine into a repeatable stress-testing report.",
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Quantitative%20Finance/Portfolio%20Analysis",
    featured: true,
  },
  {
    slug: "rl-trading-agent",
    title: "Deep Reinforcement Learning Trading Agent",
    category: "Algorithmic Trading",
    summary:
      "An automated trading agent using Proximal Policy Optimisation (PPO) to optimise entry, exit and position-sizing decisions across the top-10 S&P 500 tickers.",
    problem:
      "Rule-based trading heuristics don't adapt to shifting market regimes, and manual decision-making doesn't scale across many tickers simultaneously.",
    approach:
      "Built a custom trading environment and trained a PPO policy-gradient agent to learn buy/sell/hold and position-sizing decisions directly from historical price and technical-indicator data, then benchmarked the learned policy against conventional rule-based strategies.",
    methods: ["Deep reinforcement learning", "Policy optimisation (PPO)", "Reward shaping", "Backtesting"],
    tech: ["Python", "PyTorch", "Gym-style environment", "pandas", "yfinance"],
    metrics: [
      { label: "Universe", value: "Top-10 S&P 500 tickers" },
      { label: "Method", value: "PPO policy gradient" },
    ],
    lessons:
      "Reward shaping mattered more than network architecture for stable policy convergence — a naive PnL reward produced brittle, overfit policies.",
    future: "Add transaction-cost modelling and a live paper-trading harness with proper Sharpe/drawdown reporting.",
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Quantitative%20Finance/Algorithimic%20Trading",
    featured: true,
  },
  {
    slug: "lstm-market-forecasting",
    title: "Market Movement Forecasting with LSTM Networks",
    category: "Predictive Modelling",
    summary:
      "LSTM recurrent neural networks forecasting directional market movement from historical price series enriched with technical indicators.",
    problem:
      "Raw price series are noisy; directional forecasting needs both sequence memory and domain-specific feature signal.",
    approach:
      "Engineered a technical-indicator feature set — moving averages, RSI and MACD — alongside raw price data, then trained LSTM networks to capture temporal dependencies for directional forecasting.",
    methods: ["Recurrent neural networks", "Time-series forecasting", "Technical analysis", "Feature engineering"],
    tech: ["Python", "PyTorch", "pandas", "TA indicators (MA, RSI, MACD)"],
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Quantitative%20Finance/Stock%20market%20prediction",
    featured: true,
  },
  {
    slug: "fraud-detection",
    title: "Machine-Learning Fraud Detection System",
    category: "Anomaly Detection",
    summary:
      "An end-to-end anomaly detection pipeline over financial transaction data, combining unsupervised Isolation Forest with statistical thresholding and supervised classification.",
    problem:
      "Fraudulent transactions are rare and imbalanced against legitimate activity, making naive classification unreliable and slow to act on.",
    approach:
      "Combined unsupervised Isolation Forest and statistical thresholding for first-pass anomaly flagging with a supervised classifier refined through iterative feature engineering, resampling and decision-threshold optimisation.",
    methods: ["Unsupervised anomaly detection", "Supervised classification", "Imbalanced-class handling", "Threshold tuning"],
    tech: ["Python", "scikit-learn", "Isolation Forest", "pandas"],
    metrics: [
      { label: "Classification accuracy", value: "Up to 94%" },
      { label: "Incident response efficiency", value: "+25%" },
    ],
    lessons:
      "Threshold tuning had a bigger effect on real-world incident response time than marginal accuracy gains from model complexity.",
    future: "Extend to a streaming pipeline with online model refresh as transaction patterns drift.",
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Financial%20Technology/fraud%20detection",
    featured: true,
  },
  {
    slug: "structural-defect-classification",
    title: "Structural Defect Classification for Safety Assessment",
    category: "Computer Vision",
    summary:
      "PyTorch and ResNet-18 transfer learning to classify structural cracks in building imagery, automating a manual visual-inspection process.",
    problem:
      "Manual visual inspection for structural cracks is slow and inconsistent between inspectors.",
    approach:
      "Applied transfer learning on a ResNet-18 backbone, fine-tuned for binary crack classification on building imagery, to standardise and accelerate the assessment process.",
    methods: ["Convolutional neural networks", "Transfer learning", "Image classification", "Model fine-tuning"],
    tech: ["Python", "PyTorch", "ResNet-18"],
    lessons: "Reduced inspection time and improved consistency of assessment relative to manual review.",
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/AI%20related/pytorch%20AI%20capstone",
    featured: true,
  },
  {
    slug: "spacex-capstone",
    title: "Predictive Launch-Outcome Analysis",
    category: "IBM Applied Data Science Capstone",
    summary:
      "An end-to-end data science pipeline covering data collection, wrangling, exploratory analysis, interactive visualisation and predictive classification of SpaceX launch outcomes.",
    problem:
      "Predicting first-stage landing success requires assembling and reconciling multi-source launch data before any modelling can begin.",
    approach:
      "Collected data via API and web scraping, performed wrangling and exploratory analysis, built interactive visualisations, and trained classification models to predict deployment/landing success.",
    methods: ["Data acquisition", "Exploratory data analysis", "Interactive dashboards", "Classification modelling"],
    tech: ["Python", "pandas", "scikit-learn", "SQL", "Folium/Plotly"],
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Business%20intelligence/Resource%20Optimization",
  },
  {
    slug: "credit-risk-analysis",
    title: "Credit Risk Analysis",
    category: "Risk Modelling",
    summary: "Exploratory analysis and classification modelling assessing borrower default risk from financial and demographic features.",
    problem: "Assessing default risk consistently across borrower applications ahead of underwriting decisions.",
    approach: "Built an exploratory-to-classification pipeline profiling risk factors and estimating default probability from applicant features.",
    methods: ["Exploratory data analysis", "Classification modelling", "Feature engineering"],
    tech: ["Python", "pandas", "scikit-learn"],
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Financial%20Technology/Credit%20risk%20analysis",
  },
  {
    slug: "us-gdp-prediction",
    title: "US GDP Prediction",
    category: "Macroeconomic Forecasting",
    summary: "Time-series modelling of macroeconomic indicators to forecast US GDP.",
    problem: "Macroeconomic indicators are noisy and interrelated; forecasting GDP requires disciplined time-series treatment.",
    approach: "Applied time-series forecasting techniques over historical macroeconomic indicator data to project GDP.",
    methods: ["Time-series forecasting", "Econometrics"],
    tech: ["Python", "pandas", "statsmodels"],
    repoUrl:
      "https://github.com/knightallwell/MidKnighttechport/tree/main/Financial%20Technology/US%20GDP%20Prediction",
  },
  {
    slug: "sql-bi-dashboards",
    title: "SQL Data Manipulation & Business Intelligence Dashboards",
    category: "Data Engineering & BI",
    summary: "SQL data cleaning, transformation and querying pipelines supporting business intelligence reporting, paired with interactive Python dashboards.",
    problem: "Raw operational data needs disciplined cleaning and modelling before it can support reliable business reporting.",
    approach: "Built SQL pipelines for cleaning, transformation and querying, then surfaced results through interactive Python dashboards for non-technical stakeholders.",
    methods: ["SQL data pipelines", "Dashboarding", "Stakeholder reporting"],
    tech: ["SQL", "Python", "Plotly Dash"],
    repoUrl: "https://github.com/knightallwell/MidKnighttechport/tree/main/SQL%202",
  },
];
