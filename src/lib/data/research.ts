import type { ResearchInterest } from "@/types";

export const researchInterests: ResearchInterest[] = [
  {
    title: "Financial anomaly detection",
    description:
      "Unsupervised and semi-supervised methods for surfacing fraud and irregular transaction behaviour in imbalanced financial data.",
  },
  {
    title: "Deep learning for financial time series",
    description:
      "Recurrent and attention-based architectures for market forecasting, and how technical-indicator feature engineering interacts with learned representations.",
  },
  {
    title: "Reinforcement learning for trading strategy",
    description:
      "Policy-gradient methods (PPO) for sequential trading decisions, reward design, and the gap between backtested and live performance.",
  },
  {
    title: "Risk measurement & model auditability",
    description:
      "Bringing audit and control-environment discipline to machine-learning models used in regulated financial decision-making.",
  },
];

export const readingList = [
  { title: "Advances in Financial Machine Learning", author: "Marcos López de Prado" },
  { title: "Options, Futures, and Other Derivatives", author: "John C. Hull" },
  { title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville" },
  { title: "The Elements of Statistical Learning", author: "Hastie, Tibshirani & Friedman" },
];
