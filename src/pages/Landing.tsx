import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import SkullScene from "../components/SkullScene";

const Landing = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleProgress = useCallback((value: number) => {
    setProgress(value);
  }, []);

  const handleLoaded = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setLoadError(true);
  }, []);

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
      className="relative min-h-screen w-full overflow-hidden bg-[#090909] text-white"
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
          className="pointer-events-auto flex items-center justify-between px-6 py-6 opacity-0 md:px-12"
        >
          <h1 className="text-xl font-bold tracking-[0.18em] text-[#e8bd70] md:text-2xl">
            MATH SPRINT<span className="text-white">.</span>
          </h1>

          <div className="flex items-center gap-6 text-xs font-medium tracking-[0.15em] text-white/70 md:gap-10">
            <a
              href="/history"
              className="transition-colors hover:text-[#e8bd70]"
            >
              HISTORY
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative flex flex-1 items-center px-8 pb-16 pt-10 md:px-16 lg:px-24">
          <div className="relative z-10 max-w-xl text-left">
            <div ref={topTextRef} className="opacity-0">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.4em] text-[#d6ad65] md:text-xs">
                TRAIN YOUR MIND · CHALLENGE YOUR LIMITS
              </p>

              <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                THINK
                <br />
                <span className="text-[#e8bd70]">FASTER.</span>
              </h2>
            </div>

            <div ref={bottomTextRef} className="mt-8 opacity-0">
              <h3 className="text-xl font-bold tracking-wide sm:text-2xl">
                BREAK YOUR LIMITS.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/60 md:text-base">
                Every second is an opportunity to improve. Sharpen your
                calculations. Build your focus. Become faster with every
                challenge.
              </p>
            </div>

            <button
              ref={buttonRef}
              onClick={() => navigate("/quiz-setup")}
              className="pointer-events-auto mt-8 rounded-full border border-[#e8bd70]/70 bg-[#e8bd70] px-9 py-4 text-xs font-bold tracking-[0.2em] text-black opacity-0 transition-all duration-300 hover:scale-105 hover:bg-[#f4d394] hover:shadow-[0_0_35px_rgba(232,189,112,0.25)]"
            >
              START TRAINING <span className="ml-3">→</span>
            </button>
          </div>

          <div
            ref={footerRef}
            className="absolute bottom-8 left-8 text-[9px] font-medium tracking-[0.3em] text-white/40 opacity-0 md:left-16 md:text-[10px]"
          >
            SPEED <span className="mx-2 text-[#e8bd70]">·</span>
            ACCURACY <span className="mx-2 text-[#e8bd70]">·</span>
            CONSISTENCY
          </div>
        </section>
      </div>

      {/* Loading screen */}
      {(loading || loadError) && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090909]"
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
