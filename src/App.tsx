import { Routes, Route } from "react-router-dom";
import { Quiz } from "./pages/Quiz";
import { QuizDetails } from "./pages/QuizDetails";
import { History } from "./pages/History";
import { QuizSetup } from "./pages/QuizSetup";

function App() {
    return (
        <Routes>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz-details" element={<QuizDetails />} />
            <Route path="/history" element={<History />} />
            <Route path="/quizSetup" element={<QuizSetup />} />
        </Routes>
    );
}

export default App;
