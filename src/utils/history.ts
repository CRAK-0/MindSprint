import type { QuizHistory, QuizResult } from "../types/quiz";

export const saveQuizHistory = (result:QuizResult) => {
    console.trace("SAVE HISTORY CALLED");
    const stored = getQuizHistory();
        
        const newRecord: QuizHistory = {
            ...result,
            id: Date.now(),
            timestamp: Date.now(),
        };
        console.log("NEW RECORD ID:", newRecord.id);
console.log("STORED HISTORY:", stored);
        
        let history: QuizHistory[];
        
        if (stored === null) {
    history = [];
} else {
    history = stored;
}

const updatedHistory = [...history, newRecord];
        console.log("UPDATED HISTORY:", updatedHistory);
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