import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/useTheme";
import ThemeButton from "../components/ThemeButton";

type NavbarProps = {
  onThemeClick: () => void;
};

const Navbar = ({ onThemeClick }: NavbarProps) => {
  const { theme } = useTheme();
  const { colors } = theme;

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
      isActive ? "opacity-100" : "opacity-65 hover:opacity-100"
    }`;

  const getNavStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? colors.primary : colors.text,
    backgroundColor: isActive ? `${colors.primary}18` : "transparent",
  });

  return (
    <header
      className="mx-auto w-full rounded-2xl border px-4 py-3 sm:px-5"
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.border,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Brand */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight sm:text-xl"
          style={{ color: colors.text }}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black"
            style={{
              backgroundColor: colors.primary,
              color: colors.background,
            }}
          >
            M
          </span>

          <span>
            Mind<span style={{ color: colors.primary }}>Sprint</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={getNavClass} style={getNavStyle}>
            Quiz
          </NavLink>

          <NavLink to="/history" className={getNavClass} style={getNavStyle}>
            History
          </NavLink>

          <div
            className="ml-1 border-l pl-2 sm:ml-2 sm:pl-3"
            style={{ borderColor: colors.border }}
          >
            <ThemeButton onClick={onThemeClick} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
