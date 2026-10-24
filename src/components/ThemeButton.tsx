import { useTheme } from "../theme/useTheme";

type ThemeButtonProps = {
    onClick: () => void;
};

const ThemeButton = ({ onClick }: ThemeButtonProps) => {
    const { theme } = useTheme();

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: theme.colors.surface,
                color: theme.colors.text,
                border: `1px solid ${theme.colors.border}`,
            }}
            className="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 hover:opacity-80"
        >
            Theme
        </button>
    );
};

export default ThemeButton;