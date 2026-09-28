import type { Question } from "../types/quiz";
import { randomInteger } from "../utils/random";

export const cubeQuestion = (min:number,max:number):Question => {
    const num = randomInteger(min,max);
    const question = `${num}³`;
    const correctAnswer = num * num * num;
    const category = "cubes";
    return {
        question,correctAnswer,category
    };
}