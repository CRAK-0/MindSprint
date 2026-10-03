import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const squareQuestion = (min: number, max: number): Question => {
    const num = randomInteger(min, max);

    const question = `${num}²`;
    const correctAnswer = num * num;
    const category = "squares";

    const candidates: number[] = [];

    for (let offset = -2; offset <= 2; offset++) {
        const candidate = num + offset;
        candidates.push(candidate * candidate);
    }

    const options = createOptions(correctAnswer, candidates);

    return {
        question,
        correctAnswer,
        options,
        category
    };
};