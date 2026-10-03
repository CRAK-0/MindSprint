import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";
import { createOptions } from "../utils/options";

export const cubeQuestion = (
    min: number,
    max: number
): Question => {
    const num = randomInteger(min, max);

    const question = `${num}³`;
    const correctAnswer = num * num * num;
    const category = "cubes";

    const candidates: number[] = [];

    for (let offset = -5; offset <= 5; offset++) {
        const candidate = num + offset;

        candidates.push(candidate * candidate * candidate);
    }

    const options = createOptions(correctAnswer, candidates);

    return {
        question,
        correctAnswer,
        options,
        category
    };
};