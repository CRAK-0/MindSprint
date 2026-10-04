import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import type {
    QuizCategory,
    QuizConfig,
} from "../types/quiz";

import {
    getQuizSetup,
    saveQuizSetup,
} from "../utils/configStorage";

import { useTheme } from "../theme/useTheme";

type ValidationError = {
    category:
        | QuizCategory
        | "totalQuestions"
        | "categories";
    message: string;
};

const categories: {
    key: QuizCategory;
    title: string;
    description: string;
}[] = [
    {
        key: "tables",
        title: "Tables",
        description: "Practice multiplication tables",
    },
    {
        key: "squares",
        title: "Squares",
        description: "Practice square calculations",
    },
    {
        key: "cubes",
        title: "Cubes",
        description: "Practice cube calculations",
    },
    {
        key: "squareRoots",
        title: "Square Roots",
        description: "Practice square root calculations",
    },
    {
        key: "cubeRoots",
        title: "Cube Roots",
        description: "Practice cube root calculations",
    },
];

export const QuizSetup = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

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

    const [totalQuestions, setTotalQuestions] =
        useState(10);

    const [errors, setErrors] = useState<
        ValidationError[]
    >([]);

    useEffect(() => {
        const savedConfig = getQuizSetup();

        if (savedConfig !== null) {
            setConfig(savedConfig.config);
            setTotalQuestions(
                savedConfig.totalQuestions
            );
        }
    }, []);

    const validateQuizConfig = (
        configData: QuizConfig,
        questions: number
    ) => {
        const validationErrors: ValidationError[] = [];

        const hasSelectedCategory =
            categories.some(
                ({ key }) =>
                    configData[key].selected
            );

        if (!hasSelectedCategory) {
            validationErrors.push({
                category: "categories",
                message:
                    "Select at least one category",
            });
        }

        for (const { key } of categories) {
            const { min, max } =
                configData[key];

            if (min < 0 || max < 0) {
                validationErrors.push({
                    category: key,
                    message:
                        "Minimum and maximum must be 0 or greater",
                });

                continue;
            }

            if (min > max) {
                validationErrors.push({
                    category: key,
                    message:
                        "Minimum cannot be greater than maximum",
                });
            }
        }

        if (
            questions <= 0 ||
            !Number.isInteger(questions)
        ) {
            validationErrors.push({
                category: "totalQuestions",
                message:
                    "Number of questions must be a positive integer",
            });
        }

        setErrors(validationErrors);

        return validationErrors;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const [category, field] =
            e.target.name.split("-") as [
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

            validateQuizConfig(
                updatedConfig,
                totalQuestions
            );

            return;
        }

        const newValue = Number(
            e.target.value
        );

        const updatedConfig = {
            ...config,
            [category]: {
                ...config[category],
                [field]: newValue,
            },
        };

        setConfig(updatedConfig);

        validateQuizConfig(
            updatedConfig,
            totalQuestions
        );
    };

    const handleQuestionsChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = Number(
            e.target.value
        );

        setTotalQuestions(newValue);

        validateQuizConfig(
            config,
            newValue
        );
    };

    const getCategoryError = (
        category: QuizCategory
    ) => {
        return errors.find(
            (error) =>
                error.category === category
        );
    };

    const categorySelectionError =
        errors.find(
            (error) =>
                error.category ===
                "categories"
        );

    const totalQuestionsError =
        errors.find(
            (error) =>
                error.category ===
                "totalQuestions"
        );

    const handleSubmit = () => {
        const validationErrors =
            validateQuizConfig(
                config,
                totalQuestions
            );

        if (validationErrors.length > 0) {
            return;
        }

        saveQuizSetup(
            config,
            totalQuestions
        );

        navigate("/quiz", {
            state: {
                config,
                totalQuestions,
            },
        });
    };

    return (
        <div className="mx-auto w-full max-w-3xl">
            {/* Page heading */}
            <section className="mb-10">
                <h1
                    className="text-4xl font-bold tracking-tight"
                    style={{
                        color: theme.colors.text,
                    }}
                >
                    Set Up Your Quiz
                </h1>

                <p
                    className="mt-2"
                    style={{
                        color:
                            theme.colors.mutedText,
                    }}
                >
                    Choose what you want to
                    practice.
                </p>
            </section>

            <div className="space-y-5">
                {/* Category selection error */}
                {categorySelectionError && (
                    <div
                        className="rounded-xl px-4 py-3 text-sm"
                        style={{
                            backgroundColor:
                                theme.colors
                                    .wrongBackground,
                            color:
                                theme.colors.wrong,
                            border: `1px solid ${theme.colors.wrong}`,
                        }}
                    >
                        {
                            categorySelectionError.message
                        }
                    </div>
                )}

                {/* Categories */}
                {categories.map(
                    ({
                        key,
                        title,
                        description,
                    }) => {
                        const category =
                            config[key];

                        const error =
                            getCategoryError(
                                key
                            );

                        return (
                            <section
                                key={key}
                                className="rounded-2xl p-6"
                                style={{
                                    backgroundColor:
                                        theme
                                            .colors
                                            .surface,
                                    border: `1px solid ${theme.colors.border}`,
                                }}
                            >
                                {/* Category header */}
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h2
                                            className="text-lg font-semibold"
                                            style={{
                                                color:
                                                    theme
                                                        .colors
                                                        .text,
                                            }}
                                        >
                                            {title}
                                        </h2>

                                        <p
                                            className="mt-1 text-sm"
                                            style={{
                                                color:
                                                    theme
                                                        .colors
                                                        .mutedText,
                                            }}
                                        >
                                            {
                                                description
                                            }
                                        </p>
                                    </div>

                                    <input
                                        type="checkbox"
                                        name={`${key}-selected`}
                                        checked={
                                            category.selected
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="h-5 w-5 cursor-pointer"
                                        style={{
                                            accentColor:
                                                theme
                                                    .colors
                                                    .primary,
                                        }}
                                    />
                                </div>

                                {/* Range */}
                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            className="text-sm"
                                            style={{
                                                color:
                                                    theme
                                                        .colors
                                                        .mutedText,
                                            }}
                                        >
                                            Minimum
                                        </label>

                                        <input
                                            name={`${key}-min`}
                                            type="number"
                                            min={0}
                                            value={
                                                category.min
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="mt-2 w-full rounded-xl px-4 py-3 outline-none"
                                            style={{
                                                backgroundColor:
                                                    theme
                                                        .colors
                                                        .background,
                                                color:
                                                    theme
                                                        .colors
                                                        .text,
                                                border: `1px solid ${theme.colors.border}`,
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="text-sm"
                                            style={{
                                                color:
                                                    theme
                                                        .colors
                                                        .mutedText,
                                            }}
                                        >
                                            Maximum
                                        </label>

                                        <input
                                            name={`${key}-max`}
                                            type="number"
                                            min={0}
                                            value={
                                                category.max
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="mt-2 w-full rounded-xl px-4 py-3 outline-none"
                                            style={{
                                                backgroundColor:
                                                    theme
                                                        .colors
                                                        .background,
                                                color:
                                                    theme
                                                        .colors
                                                        .text,
                                                border: `1px solid ${theme.colors.border}`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div
                                        className="mt-4 rounded-lg px-3 py-2 text-sm"
                                        style={{
                                            backgroundColor:
                                                theme
                                                    .colors
                                                    .wrongBackground,
                                            color:
                                                theme
                                                    .colors
                                                    .wrong,
                                            border: `1px solid ${theme.colors.wrong}`,
                                        }}
                                    >
                                        {
                                            error.message
                                        }
                                    </div>
                                )}
                            </section>
                        );
                    }
                )}

                {/* Question count */}
                <section
                    className="rounded-2xl p-6"
                    style={{
                        backgroundColor:
                            theme.colors
                                .surface,
                        border: `1px solid ${theme.colors.border}`,
                    }}
                >
                    <h2
                        className="text-lg font-semibold"
                        style={{
                            color:
                                theme.colors.text,
                        }}
                    >
                        Number of Questions
                    </h2>

                    <p
                        className="mt-1 text-sm"
                        style={{
                            color:
                                theme.colors
                                    .mutedText,
                        }}
                    >
                        How many questions do
                        you want in this quiz?
                    </p>

                    <input
                        type="number"
                        min={1}
                        value={totalQuestions}
                        onChange={
                            handleQuestionsChange
                        }
                        className="mt-5 w-full rounded-xl px-4 py-3 outline-none"
                        style={{
                            backgroundColor:
                                theme.colors
                                    .background,
                            color:
                                theme.colors.text,
                            border: `1px solid ${theme.colors.border}`,
                        }}
                    />

                    {totalQuestionsError && (
                        <div
                            className="mt-4 rounded-lg px-3 py-2 text-sm"
                            style={{
                                backgroundColor:
                                    theme.colors
                                        .wrongBackground,
                                color:
                                    theme.colors
                                        .wrong,
                                border: `1px solid ${theme.colors.wrong}`,
                            }}
                        >
                            {
                                totalQuestionsError.message
                            }
                        </div>
                    )}
                </section>

                {/* Start button */}
                <button
                    disabled={errors.length > 0}
                    onClick={handleSubmit}
                    className="w-full rounded-xl px-5 py-4 font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
                    style={{
                        backgroundColor:
                            theme.colors.primary,
                        color:
                            theme.colors.background,
                    }}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};