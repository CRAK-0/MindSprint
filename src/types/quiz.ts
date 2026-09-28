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