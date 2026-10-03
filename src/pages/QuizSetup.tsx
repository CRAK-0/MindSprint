import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type { QuizCategory, QuizConfig } from "../types/quiz";
import { getQuizSetup, saveQuizSetup } from "../utils/configStorage";
import { useNavigate } from "react-router-dom";

type ValidationError = {
    category: QuizCategory | "totalQuestions" | "categories";
    message: string;
};

export const QuizSetup = () => {
    const [config, setConfig] = useState<QuizConfig>({
        tables: {
            selected: false,
            min: 1,
            max: 10,
        },
        squares: {
            selected: false,
            min: 1,
            max: 100,
        },
        cubes: {
            selected: false,
            min: 1,
            max: 20,
        },
        squareRoots: {
            selected: false,
            min: 1,
            max: 100,
        },
        cubeRoots: {
            selected: false,
            min: 1,
            max: 20,
        },
    });

    const [totalQuestions, setTotalQuestions] = useState(10);

    const [errors, setErrors] = useState<ValidationError[]>([]);

    useEffect(() => {

        
        const savedConfig = getQuizSetup();
        
        if (savedConfig !== null) {
            setConfig(savedConfig.config);
            setTotalQuestions(savedConfig.totalQuestions);
        }
    },[])

    const navigate = useNavigate();


    const validateQuizConfig = (
        configData: QuizConfig,
        questions: number
    ) => {
        const categories: QuizCategory[] = [
            "tables",
            "squares",
            "cubes",
            "squareRoots",
            "cubeRoots",
        ];

        const validationErrors: ValidationError[] = [];

        const hasSelectedCategory = categories.some(
            (category) => configData[category].selected
        );

        if (!hasSelectedCategory) {
            validationErrors.push({
                category: "categories",
                message: "Select at least one category",
            });
        }

        for (const category of categories) {
            const { min, max } = configData[category];

            if (min < 0 || max < 0) {
                validationErrors.push({
                    category,
                    message: "Minimum and maximum must be 0 or greater",
                });

                continue;
            }

            if (min > max) {
                validationErrors.push({
                    category,
                    message: "Minimum cannot be greater than maximum",
                });
            }
        }

        if (questions <= 0 || !Number.isInteger(questions)) {
            validationErrors.push({
                category: "totalQuestions",
                message: "Number of questions must be a positive integer",
            });
        }

        setErrors(validationErrors);

        return validationErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const [category, field] = e.target.name.split("-") as [
            QuizCategory,
            "selected" | "min" | "max"
        ];

        if (field === "selected") {
            const updatedConfig = {
                ...config,
                [category]: {
                    ...config[category],
                    selected: e.target.checked,
                },
            };

            setConfig(updatedConfig);
            validateQuizConfig(updatedConfig, totalQuestions);

            return;
        }

        const newValue = Number(e.target.value);

        const updatedConfig = {
            ...config,
            [category]: {
                ...config[category],
                [field]: newValue,
            },
        };

        setConfig(updatedConfig);
        validateQuizConfig(updatedConfig, totalQuestions);
    };

    const handleQuestionsChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = Number(e.target.value);

        setTotalQuestions(newValue);
        validateQuizConfig(config, newValue);
    };

    const getCategoryError = (category: QuizCategory) => {
        return errors.find(
            (error) => error.category === category
        );
    };

    const categoryError = (category: QuizCategory) => {
        const error = getCategoryError(category);

        if (!error) {
            return null;
        }

        return (
            <div className="mt-3 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                {error.message}
            </div>
        );
    };

    const totalQuestionsError = errors.find(
        (error) => error.category === "totalQuestions"
    );

    const categorySelectionError = errors.find(
        (error) => error.category === "categories"
    );

    

    const handleSubmit = () => {
        const validationErrors = validateQuizConfig(config, totalQuestions);
        if (validationErrors.length > 0) return;
        saveQuizSetup(config,totalQuestions);
        navigate("/quiz", {
           state: { config , totalQuestions}
        }
    );
    }
    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
            <div className="mx-auto max-w-3xl">

                <div className="mb-10">
                    <h1 className="text-4xl font-bold">
                        Set Up Your Quiz
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Choose what you want to practice.
                    </p>
                </div>

                <div className="space-y-6">

                    {/* Category selection error */}
                    {categorySelectionError && (
                        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {categorySelectionError.message}
                        </div>
                    )}

                    {/* Tables */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Tables
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Practice multiplication tables
                                </p>
                            </div>

                            <input
                                type="checkbox"
                                name="tables-selected"
                                checked={config.tables.selected}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-zinc-400">
                                    Minimum
                                </label>

                                <input
                                    name="tables-min"
                                    type="number"
                                    min={0}
                                    value={config.tables.min}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-zinc-400">
                                    Maximum
                                </label>

                                <input
                                    name="tables-max"
                                    type="number"
                                    min={0}
                                    value={config.tables.max}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>
                        </div>

                        {categoryError("tables")}
                    </div>

                    {/* Squares */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Squares
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Practice square calculations
                                </p>
                            </div>

                            <input
                                type="checkbox"
                                name="squares-selected"
                                checked={config.squares.selected}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-zinc-400">
                                    Minimum
                                </label>

                                <input
                                    name="squares-min"
                                    type="number"
                                    min={0}
                                    value={config.squares.min}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-zinc-400">
                                    Maximum
                                </label>

                                <input
                                    name="squares-max"
                                    type="number"
                                    min={0}
                                    value={config.squares.max}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>
                        </div>

                        {categoryError("squares")}
                    </div>

                    {/* Cubes */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Cubes
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Practice cube calculations
                                </p>
                            </div>

                            <input
                                type="checkbox"
                                name="cubes-selected"
                                checked={config.cubes.selected}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-zinc-400">
                                    Minimum
                                </label>

                                <input
                                    name="cubes-min"
                                    type="number"
                                    min={0}
                                    value={config.cubes.min}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-zinc-400">
                                    Maximum
                                </label>

                                <input
                                    name="cubes-max"
                                    type="number"
                                    min={0}
                                    value={config.cubes.max}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>
                        </div>

                        {categoryError("cubes")}
                    </div>

                    {/* Square Roots */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Square Roots
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Practice square root calculations
                                </p>
                            </div>

                            <input
                                type="checkbox"
                                name="squareRoots-selected"
                                checked={config.squareRoots.selected}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-zinc-400">
                                    Minimum
                                </label>

                                <input
                                    name="squareRoots-min"
                                    type="number"
                                    min={0}
                                    value={config.squareRoots.min}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-zinc-400">
                                    Maximum
                                </label>

                                <input
                                    name="squareRoots-max"
                                    type="number"
                                    min={0}
                                    value={config.squareRoots.max}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>
                        </div>

                        {categoryError("squareRoots")}
                    </div>

                    {/* Cube Roots */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Cube Roots
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                    Practice cube root calculations
                                </p>
                            </div>

                            <input
                                type="checkbox"
                                name="cubeRoots-selected"
                                checked={config.cubeRoots.selected}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-zinc-400">
                                    Minimum
                                </label>

                                <input
                                    name="cubeRoots-min"
                                    type="number"
                                    min={0}
                                    value={config.cubeRoots.min}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-zinc-400">
                                    Maximum
                                </label>

                                <input
                                    name="cubeRoots-max"
                                    type="number"
                                    min={0}
                                    value={config.cubeRoots.max}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                                />
                            </div>
                        </div>

                        {categoryError("cubeRoots")}
                    </div>

                    {/* Number of questions */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                        <h2 className="text-xl font-semibold">
                            Number of Questions
                        </h2>

                        <input
                            type="number"
                            min={1}
                            value={totalQuestions}
                            onChange={handleQuestionsChange}
                            className="mt-4 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 outline-none"
                        />

                        {totalQuestionsError && (
                            <div className="mt-3 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                                {totalQuestionsError.message}
                            </div>
                        )}
                    </div>

                    <button
                        disabled={errors.length > 0}
                        className="w-full rounded-xl bg-white px-5 py-4 font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};