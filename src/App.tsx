import { Routes, Route } from "react-router-dom";

import { Quiz } from "./pages/Quiz";
import { QuizDetails } from "./pages/QuizDetails";
import { History } from "./pages/History";
import { QuizSetup } from "./pages/QuizSetup";

import AppLayout from "./layout/AppLayout";
import { ThemeProvider } from "./theme/ThemeProvider";
// import SkullScene from "./components/SkullScene";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Normal pages */}
        <Route element={<AppLayout />}>
          <Route path="/quiz-setup" element={<QuizSetup />} />
          <Route path="/quiz-details" element={<QuizDetails />} />
          <Route path="/history" element={<History />} />
        </Route>

        {/* Distraction-free quiz */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
