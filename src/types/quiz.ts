export type QuizCategory =
  | "tables"
  | "squares"
  | "cubes"
  | "squareRoots"
  | "addition"
  | "subtraction"
  | "multiplication"
  | "cubeRoots"
  | "percentage"
  | "fraction"
  | "ratio"
  | "simplification";

export type Difficulty = "beginner" | "intermediate" | "master";

export type Question = {
  question: string;
  correctAnswer: number | string;
  options: (number | string)[];
  category: string;
  difficulty?: Difficulty;
};

export type AnsweredQuestion = {
  question: string;
  correctAnswer: number;
  category: QuizCategory;
  userAnswer: number;
  timeTaken: number;
  isCorrect: boolean;
};

// Categories that use minimum and maximum values
export type RangeCategoryConfig = {
  selected: boolean;
  min: number;
  max: number;
};

// Categories that use a digit count
export type DigitCategoryConfig = {
  selected: boolean;
  digits: number;
};

// Categories that use a difficulty selector
export type DifficultyCategoryConfig = {
  selected: boolean;
  difficulty: Difficulty;
};

// Categories that need no additional settings
export type BasicCategoryConfig = {
  selected: boolean;
};

export type QuizConfig = {
  tables: RangeCategoryConfig;
  squares: RangeCategoryConfig;
  cubes: RangeCategoryConfig;
  squareRoots: RangeCategoryConfig;
  cubeRoots: RangeCategoryConfig;

  addition: DigitCategoryConfig;
  subtraction: DigitCategoryConfig;
  multiplication: RangeCategoryConfig;

  simplification: DifficultyCategoryConfig;
  percentage: DifficultyCategoryConfig;
  fraction: DifficultyCategoryConfig;

  ratio: BasicCategoryConfig;
};

export type QuizSession = {
  totalQuestions: number;
  answeredQuestions: AnsweredQuestion[];
  currentQuestion: Question;
  totalTime: number;
  quizConfig: QuizConfig;
  questionStartTime: number;
  quizStartTime: number;
  currentQuestionNumber: number;
  endReason: "completed" | "question-pool-exhausted" | null;
};

export type QuizResult = {
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number;
  averageTime: number;
  fastestAnswer: number;
  slowestAnswer: number;
  totalTime: number;
};

export type QuizHistory = QuizResult & {
  id: number;
  timestamp: number;
};
