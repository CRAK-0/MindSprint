import { themes } from "../theme/themes";
import { useTheme } from "../theme/useTheme";

type ThemeCardProps = {
    onClose: () => void;
};

const ThemeCard = ({ onClose }: ThemeCardProps) => {
    const { theme, activeTheme, setActiveTheme } = useTheme();

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.55)",
            }}
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-2xl p-5"
                style={{
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                    border: `1px solid ${theme.colors.border}`,
                }}
                onClick={(event) => event.stopPropagation()}
            >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Choose Theme
                        </h2>

                        <p
                            className="mt-1 text-sm"
                            style={{
                                color: theme.colors.mutedText,
                            }}
                        >
                            Select a theme for MindSprint
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-lg transition-all duration-200"
                        style={{
                            backgroundColor: theme.colors.background,
                            color: theme.colors.mutedText,
                            border: `1px solid ${theme.colors.border}`,
                        }}
                        onMouseEnter={(event) => {
                            event.currentTarget.style.backgroundColor =
                                theme.colors.surfaceHover;
                            event.currentTarget.style.color =
                                theme.colors.text;
                        }}
                        onMouseLeave={(event) => {
                            event.currentTarget.style.backgroundColor =
                                theme.colors.background;
                            event.currentTarget.style.color =
                                theme.colors.mutedText;
                        }}
                        aria-label="Close theme selector"
                    >
                        ×
                    </button>
                </div>

                {/* Theme list */}
                <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
                    {Object.entries(themes).map(
                        ([themeKey, themeData]) => {
                            const isActive =
                                activeTheme === themeKey;

                            return (
                                <button
                                    key={themeKey}
                                    onClick={() =>
                                        setActiveTheme(themeKey)
                                    }
                                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200"
                                    style={{
                                        backgroundColor: isActive
                                            ? theme.colors.surfaceHover
                                            : theme.colors.background,

                                        color: theme.colors.text,

                                        border: isActive
                                            ? `2px solid ${theme.colors.primary}`
                                            : `1px solid ${theme.colors.border}`,
                                    }}
                                >
                                    <span className="text-sm font-medium">
                                        {themeData.name}
                                    </span>

                                    {isActive && (
                                        <span
                                            className="text-xs font-semibold"
                                            style={{
                                                color: theme.colors.primary,
                                            }}
                                        >
                                            Active
                                        </span>
                                    )}
                                </button>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThemeCard;