import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";

export const tableQuestion = (min: number, max: number): Question => {
    const num1 = randomInteger(min, max);
    const num2 = randomInteger(1, 10);

    const question = `${num1} × ${num2}`;
    const correctAnswer = num1 * num2;
    const category = "tables";

    return {
        question,
        correctAnswer,
        category
    };
};