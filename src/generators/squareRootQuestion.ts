import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const squareRootQuestion = (
    min: number,
    max: number
): Question => {
    const num = randomInteger(min, max);

    const question = `√${num * num}`;
    const correctAnswer = num;
    const category = "squareRoots";

    const candidates: number[] = [];

    for (let offset = -5; offset <= 5; offset++) {
        const candidate = num + offset;

        if (candidate >= 0) {
            candidates.push(candidate);
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