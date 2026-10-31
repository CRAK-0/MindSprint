import type { QuizConfig } from "../types/quiz";

type GetSetup = {
  config: QuizConfig;
  totalQuestions: number;
};

const defaultConfig: QuizConfig = {
  tables: { selected: false, min: 1, max: 10 },
  squares: { selected: false, min: 1, max: 100 },
  squareRoots: { selected: false, min: 1, max: 20 },
  cubes: { selected: false, min: 1, max: 10 },
  cubeRoots: { selected: false, min: 1, max: 10 },

  addition: { selected: false, digits: 2 },
  subtraction: { selected: false, digits: 2 },

  multiplication: { selected: false, min: 1, max: 100 },

  percentage: { selected: false, difficulty: "beginner" },
  fraction: { selected: false, difficulty: "beginner" },
  simplification: { selected: false, difficulty: "beginner" },

  ratio: { selected: false },
};

export const saveQuizSetup = (config: QuizConfig, totalQuestions: number) => {
  const data = JSON.stringify({
    config: config,
    totalQuestions: totalQuestions,
  });

  localStorage.setItem("quizSetup", data);
};

const mergeCategory = <T extends object>(defaults: T, saved: unknown): T => {
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
    return { ...defaults };
  }

  return {
    ...defaults,
    ...saved,
  };
};

export const getQuizSetup = (): GetSetup | null => {
  const savedConfig = localStorage.getItem("quizSetup");

  if (savedConfig == null) {
    return null;
  }

  try {
    const parsedData = JSON.parse(savedConfig);

    if (
      !parsedData ||
      typeof parsedData !== "object" ||
      !parsedData.config ||
      Array.isArray(parsedData.config) ||
      !Number.isInteger(parsedData.totalQuestions) ||
      parsedData.totalQuestions < 1
    ) {
      throw new Error("Invalid saved quiz setup");
    }

    const mergedConfig: QuizConfig = {
      ...defaultConfig,

      tables: mergeCategory(defaultConfig.tables, parsedData.config.tables),
      squares: mergeCategory(defaultConfig.squares, parsedData.config.squares),
      squareRoots: mergeCategory(
        defaultConfig.squareRoots,
        parsedData.config.squareRoots,
      ),
      cubes: mergeCategory(defaultConfig.cubes, parsedData.config.cubes),
      cubeRoots: mergeCategory(
        defaultConfig.cubeRoots,
        parsedData.config.cubeRoots,
      ),

      addition: mergeCategory(
        defaultConfig.addition,
        parsedData.config.addition,
      ),
      subtraction: mergeCategory(
        defaultConfig.subtraction,
        parsedData.config.subtraction,
      ),

      multiplication: mergeCategory(
        defaultConfig.multiplication,
        parsedData.config.multiplication,
      ),

      percentage: mergeCategory(
        defaultConfig.percentage,
        parsedData.config.percentage,
      ),
      fraction: mergeCategory(
        defaultConfig.fraction,
        parsedData.config.fraction,
      ),
      simplification: mergeCategory(
        defaultConfig.simplification,
        parsedData.config.simplification,
      ),

      ratio: mergeCategory(defaultConfig.ratio, parsedData.config.ratio),
    };

    const result = {
      config: mergedConfig,
      totalQuestions: parsedData.totalQuestions,
    };

    saveQuizSetup(result.config, result.totalQuestions);

    return result;
  } catch {
    saveQuizSetup(defaultConfig, 10);

    return {
      config: defaultConfig,
      totalQuestions: 10,
    };
  }
};
