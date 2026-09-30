export type QuizCategory = "tables" | "squares" | "cubes" | "squareRoots" | "cubeRoots";

export type Question = {
    question : string,
    correctAnswer : number,
    category : QuizCategory,
};

export type AnsweredQuestion = {
    question: string,
correctAnswer: number,
category: QuizCategory,
userAnswer: number,
timeTaken: number,
isCorrect : boolean
}
export type CategoryConfig = {
    selected: boolean;
    min: number;
    max: number;
};

export type QuizConfig = Record<QuizCategory, CategoryConfig>;

export type QuizSession = {
    totalQuestions: number,
    answeredQuestions : AnsweredQuestion[],
    currentQuestion : Question,
    totalTime: number,
    quizConfig: QuizConfig,
    questionStartTime: number,
    quizStartTime:number
}

export type QuizResult = {
    // your fields here
    correctAnswers:number,
    wrongAnswers:number,
    accuracy:number,
    averageTime:number,
    fastestAnswer:number,
    slowestAnswer:number,
    totalTime:number
};

export type QuizHistory = QuizResult & {
    id:number,
    timestamp: number
}