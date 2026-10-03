import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const cubeRootQuestion = (
    min: number,
    max: number
): Question => {
    const num = randomInteger(min, max);

    const question = `∛${num * num * num}`;
    const correctAnswer = num;
    const category = "cubeRoots";

    const candidates: number[] = [];

    for (let offset = -5; offset <= 5; offset++) {
        candidates.push(num + offset);
    }

    const options = createOptions(correctAnswer, candidates);

    return {
        question,
        correctAnswer,
        options,
        category
    };
};  