export type Theme = {
    name: string;

    colors: {
        background: string;
        surface: string;
        surfaceHover: string;

        text: string;
        mutedText: string;

        primary: string;
        primaryHover: string;

        border: string;

        correct: string;
        correctBackground: string;

        wrong: string;
        wrongBackground: string;

        disabled: string;
        focus: string;
    };
};
