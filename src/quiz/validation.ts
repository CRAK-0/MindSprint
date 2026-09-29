import type { QuizCategory, QuizConfig } from "../types/quiz";
import { throwError } from "../utils/errors";

export const validateQuizConfig = (quizConfig: QuizConfig,totalQuestions:number) => {
    const categories = Object.keys(quizConfig) as QuizCategory[];
    const selectedCategories = categories.filter((category) => {
        return quizConfig[category].selected === true;
    })
    if (selectedCategories.length === 0) {
    // no category selected
    throwError("At least one category must be selected.")
    }

    selectedCategories.forEach((category) => {
        if(quizConfig[category].min > quizConfig[category].max){
            throwError("Minimum cannot be greater than maximum.");
        }
    })

    if(totalQuestions<=0 || !Number.isInteger(totalQuestions)){
        throwError("Number of Quetion is selected wrong or some Error");
    }
}