import { themes } from "../theme/themes";
import { useTheme } from "../theme/useTheme";

type ThemeCardProps = {
  onClose: () => void;
};

const ThemeCard = ({ onClose }: ThemeCardProps) => {
  const { theme, activeTheme, setActiveTheme } = useTheme();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      onClick={onClose}
    >
      <div
        className="flex max-h-[80vh] w-full max-w-sm flex-col overflow-hidden rounded-2xl border p-3 shadow-2xl shadow-black/40"
        style={{
          backgroundColor: "#151515",
          color: theme.colors.text,
          borderColor: "rgba(255,255,255,0.1)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-3 flex shrink-0 items-center justify-between px-2 py-1">
          <div>
            <h2 className="text-base font-semibold">Choose Theme</h2>
            <p className="mt-1 text-xs text-white/50">
              Select a theme for MindSprint
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Close theme selector"
          >
            ×
          </button>
        </div>

        {/* Theme list */}
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1 [scrollbar-width:thin] [scrollbar-color:#555_transparent]">
          {Object.entries(themes).map(([themeKey, themeData]) => {
            const isActive = activeTheme === themeKey;

            return (
              <button
                key={themeKey}
                onClick={() => setActiveTheme(themeKey)}
                className="flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-all duration-200"
                style={{
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.03)",
                  color: theme.colors.text,
                  borderColor: isActive
                    ? themeData.colors.primary
                    : "rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Theme color preview */}
                  <div className="flex gap-1">
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{
                        backgroundColor: themeData.colors.background,
                        border: `1px solid ${themeData.colors.border}`,
                      }}
                    />
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{
                        backgroundColor: themeData.colors.primary,
                      }}
                    />
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{
                        backgroundColor: themeData.colors.surface,
                        border: `1px solid ${themeData.colors.border}`,
                      }}
                    />
                  </div>

                  <span className="text-sm font-medium">{themeData.name}</span>
                </div>

                {isActive && (
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: themeData.colors.primary,
                    }}
                  >
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 shrink-0 border-t border-white/10 px-2 pt-3">
          <p className="text-[10px] font-medium tracking-widest text-white/40">
            CURRENT THEME: {theme.name.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
