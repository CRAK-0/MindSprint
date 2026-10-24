import { tableQuestion } from "../generators/TableGenerator";
import { squareQuestion } from "../generators/squareQuestion";
import { cubeQuestion } from "../generators/cubeQuestion";
import { squareRootQuestion } from "../generators/squareRootQuestion";
import { cubeRootQuestion } from "../generators/cubeRootQuestion";
import type { Question, QuizCategory, QuizConfig } from "../types/quiz";
import { throwError } from "../utils/errors";

export const quizEngine = (quizConfig:QuizConfig) => {

    const categories = Object.keys(quizConfig) as QuizCategory[];

    const selectedCategories = categories.filter((category) => {
    return quizConfig[category].selected === true;
});
    
    if(selectedCategories.length === 0){
        return throwError("Zero Category is selected.")
    }
    
const index = Math.floor(Math.random() * selectedCategories.length);
const category = selectedCategories[index];

const generators = {
    tables: tableQuestion,
    squares: squareQuestion,
    cubes: cubeQuestion,
    squareRoots: squareRootQuestion,
    cubeRoots: cubeRootQuestion
};

const quiz:Question = generators[category](quizConfig[category].min,quizConfig[category].max);
return quiz;
}