import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const tableQuestion = (min: number, max: number): Question => {
    const num1 = randomInteger(min, max);
    const num2 = randomInteger(1, 10);

    const question = `${num1} × ${num2}`;
    const correctAnswer = num1 * num2;
    const category = "tables";

    const candidate1: number[] = [];
    const candidate2: number[] = [];

    for (let offset = -2; offset <= 2; offset++) {
        candidate1.push(num1 + offset);
        candidate2.push(num2 + offset);
    }

    const candidates: number[] = [];

    for (let i = 0; i < candidate1.length; i++) {
        for (let j = 0; j < candidate2.length; j++) {
            candidates.push(candidate1[i] * candidate2[j]);
        }
    }

    const options = createOptions(correctAnswer, candidates);

    return {
        question,
        correctAnswer,
        options,
        category
    };
};