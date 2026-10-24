import type { QuizHistory, QuizResult } from "../types/quiz";

export const saveQuizHistory = (result:QuizResult) => {
    const stored = getQuizHistory();
        
        const newRecord: QuizHistory = {
            ...result,
            id: Date.now(),
            timestamp: Date.now(),
        };
        
        let history: QuizHistory[];
        
        if (stored === null) {
    history = [];
} else {
    history = stored;
}

const updatedHistory = [...history, newRecord];
        localStorage.setItem("quiz", JSON.stringify(updatedHistory));
}
export const getQuizHistory = ():QuizHistory[]|null => {
   const stored  = localStorage.getItem("quiz");
   
   
   if(stored === null){
    return null;
   }
    const history:QuizHistory[] = JSON.parse(stored);
    return history;
       
}
export const clearQuizHistory = () => {
    localStorage.removeItem("quiz");
}