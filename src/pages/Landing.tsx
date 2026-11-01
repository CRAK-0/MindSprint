import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import SkullScene from "../components/SkullScene";
import { useTheme } from "../theme/useTheme";

const Landing = () => {
  const navigate = useNavigate();
  const { theme, themes, activeTheme, setActiveTheme } = useTheme();

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  const handleProgress = useCallback((value: number) => {
    setProgress(value);
  }, []);

  const handleLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setLoadError(true);
  }, []);

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node)
      ) {
        setThemeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close theme menu with Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setThemeOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // GSAP intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        navbarRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
      )
        .fromTo(
          topTextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.5",
        )
        .fromTo(
          bottomTextRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.4",
        )
        .fromTo(
          buttonRef.current,
          { y: 25, scale: 0.9, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.2",
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Fade out loading screen
  useEffect(() => {
    if (!loading && loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          setProgress(100);
        },
      });
    }
  }, [loading]);

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen w-full overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* Three.js background */}
      <div className="absolute inset-0 z-0 translate-x-0 md:translate-x-60">
        <SkullScene
          onProgress={handleProgress}
          onLoaded={handleLoaded}
          onError={handleError}
        />
      </div>

      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      {/* Foreground content */}
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <nav
          ref={navbarRef}
          className="pointer-events-auto relative z-[100] flex items-center justify-between px-6 py-6 opacity-0 md:px-12"
        >
          <h1 className="text-xl font-bold tracking-[0.18em] text-[var(--color-primary)] md:text-2xl">
            MATH SPRINT<span className="text-[var(--color-text)]">.</span>
          </h1>

          <div className="flex items-center gap-5 text-xs font-medium tracking-[0.15em] text-white/70 md:gap-8">
            <a
              href="/history"
              className="text-[var(--color-muted-text)] transition-colors hover:text-[var(--color-primary)]"
            >
              HISTORY
            </a>

            {/* Theme selector */}
            <div className="relative" ref={themeMenuRef}>
              <button
                type="button"
                onClick={() => setThemeOpen((prev) => !prev)}
                aria-label="Choose theme"
                aria-expanded={themeOpen}
                aria-haspopup="true"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  themeOpen
                    ? "border-[#e8bd70] bg-[#e8bd70]/15 text-[#e8bd70]"
                    : "border-white/15 bg-white/5 text-white/70 hover:border-[#e8bd70]/60 hover:text-[#e8bd70]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="13.5" cy="6.5" r=".5" />
                  <circle cx="17.5" cy="10.5" r=".5" />
                  <circle cx="8.5" cy="7.5" r=".5" />
                  <circle cx="6.5" cy="12.5" r=".5" />
                  <path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-1.8c-.9 0-1.5.9-1.1 1.7.3.6.4 1.1.4 1.8 0 1.9-1.6 3.5-4.5 3.5Z" />
                </svg>
              </button>

              {/* Theme dropdown */}
              {themeOpen && (
                <div className="absolute right-0 top-14 z-[100] w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#151515]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] text-white/40">
                        APPEARANCE
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Choose your theme
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setThemeOpen(false)}
                      aria-label="Close theme selector"
                      className="rounded-full p-1 text-white/40 transition hover:bg-white/10 hover:text-white"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m18 6-12 12M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-1">
                    {Object.entries(themes).map(([key, item]) => {
                      const selected = activeTheme === key;

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setActiveTheme(key);
                            setThemeOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 ${
                            selected
                              ? "border-[#e8bd70]/50 bg-[#e8bd70]/10"
                              : "border-transparent hover:border-white/10 hover:bg-white/5"
                          }`}
                        >
                          {/* Theme color preview */}
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
                            style={{
                              backgroundColor: item.colors.background,
                              borderColor: item.colors.border,
                            }}
                          >
                            <div className="flex gap-1">
                              <span
                                className="h-4 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: item.colors.primary,
                                }}
                              />
                              <span
                                className="h-4 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: item.colors.correct,
                                }}
                              />
                              <span
                                className="h-4 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: item.colors.wrong,
                                }}
                              />
                            </div>
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className={`text-xs font-semibold ${
                                selected ? "text-[#e8bd70]" : "text-white/90"
                              }`}
                            >
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-[10px] text-white/40">
                              {selected ? "Currently active" : "Select theme"}
                            </p>
                          </div>

                          {selected && (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#e8bd70"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m5 12 4 4L19 6" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-3 border-t border-white/10 px-2 pt-3">
                    <p className="text-[9px] tracking-[0.15em] text-white/30">
                      CURRENT THEME: {theme.name.toUpperCase()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative flex flex-1 items-center px-8 pb-16 pt-10 md:px-16 lg:px-24">
          <div className="relative z-10 max-w-xl text-left">
            <div ref={topTextRef} className="opacity-0">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.4em] text-[var(--color-primary)] md:text-xs">
                TRAIN YOUR MIND · CHALLENGE YOUR LIMITS
              </p>

              <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                THINK
                <br />
                <span className="text-[var(--color-primary)]">FASTER.</span>
              </h2>
            </div>

            <div ref={bottomTextRef} className="mt-8 opacity-0">
              <h3 className="text-xl font-bold tracking-wide sm:text-2xl">
                BREAK YOUR LIMITS.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted-text)] md:text-base">
                Every second is an opportunity to improve. Sharpen your
                calculations. Build your focus. Become faster with every
                challenge.
              </p>
            </div>

            <button
              ref={buttonRef}
              onClick={() => navigate("/quiz-setup")}
              className="pointer-events-auto mt-8 rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-9 py-4 text-xs font-bold tracking-[0.2em] text-[var(--color-background)] opacity-0 transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              START TRAINING <span className="ml-3">→</span>
            </button>
          </div>

          <div
            ref={footerRef}
            className="absolute bottom-8 left-8 text-[9px] font-medium tracking-[0.3em] text-[var(--color-muted-text)] opacity-0 md:left-16 md:text-[10px]"
          >
            SPEED <span className="mx-2 text-[var(--color-primary)]">·</span>
            ACCURACY <span className="mx-2 text-[var(--color-primary)]">·</span>
            CONSISTENCY
          </div>
        </section>
      </div>

      {/* Loading screen */}
      {(loading || loadError) && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-background)]"
        >
          <h1 className="text-2xl font-bold tracking-[0.2em] text-[#e8bd70]">
            MATH SPRINT<span className="text-white">.</span>
          </h1>

          {loadError ? (
            <>
              <p className="mt-10 text-sm tracking-widest text-red-400">
                FAILED TO LOAD EXPERIENCE
              </p>
              <button
                onClick={() => window.location.reload()}
                className="pointer-events-auto mt-6 rounded-full border border-[#e8bd70]/70 px-6 py-3 text-xs tracking-widest text-[#e8bd70] hover:bg-[#e8bd70] hover:text-black"
              >
                TRY AGAIN
              </button>
            </>
          ) : (
            <>
              <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-[#e8bd70] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-5 text-xs tracking-[0.3em] text-white/50">
                PREPARING YOUR EXPERIENCE
              </p>

              <p className="mt-2 text-sm text-[#e8bd70]">
                {Math.round(progress)}%
              </p>
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default Landing;
