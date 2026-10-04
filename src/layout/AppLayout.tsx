import { useState } from "react";
import { Outlet } from "react-router-dom";

import { useTheme } from "../theme/useTheme";
import ThemeCard from "../components/ThemeCard";
import Navbar from "./Navbar";

const AppLayout = () => {
    const { theme } = useTheme();

    const [showThemeCard, setShowThemeCard] =
        useState(false);

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
            }}
        >

            <Navbar
    onThemeClick={() => setShowThemeCard(true)}
/>

            <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6">
                <Outlet />
            </main>

            {showThemeCard && (
                <ThemeCard
                    onClose={() => setShowThemeCard(false)}
                />
            )}
        </div>
    );
};

export default AppLayout;