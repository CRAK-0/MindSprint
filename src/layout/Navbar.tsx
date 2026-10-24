import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/useTheme";
import ThemeButton from "../components/ThemeButton";

type NavbarProps = {
    onThemeClick: () => void;
};

const Navbar = ({ onThemeClick }: NavbarProps) => {
    const { theme } = useTheme();

    const getNavClass = ({
        isActive,
    }: {
        isActive: boolean;
    }) =>
        `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
            isActive
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
        }`;

    return (
        <header
            style={{
                backgroundColor: theme.colors.surface,
            }}
            className="mx-auto w-screen  rounded-2xl px-4 py-3"
        >
            <div className="flex items-center justify-between">
                <NavLink
                    to="/"
                    style={{
                        color: theme.colors.text,
                    }}
                    className="text-lg font-bold"
                >
                    MindSprint
                </NavLink>

                <nav className="flex items-center gap-1">
                    <NavLink
                        to="/"
                        className={getNavClass}
                        style={({ isActive }) => ({
                            color: isActive
                                ? theme.colors.primary
                                : theme.colors.text,
                        })}
                    >
                        Quiz
                    </NavLink>

                    <NavLink
                        to="/history"
                        className={getNavClass}
                        style={({ isActive }) => ({
                            color: isActive
                                ? theme.colors.primary
                                : theme.colors.text,
                        })}
                    >
                        History
                    </NavLink>

                    <ThemeButton
                        onClick={onThemeClick}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;