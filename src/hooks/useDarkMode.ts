"use client";

import {useEffect, useState} from "react";

export function useDarkMode() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") as "light" | "dark" | null;

        if (currentTheme) {
            setTheme(currentTheme);
            document.documentElement.classList.add(currentTheme);
        } else {
            setTheme("light");
            document.documentElement.classList.add("light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);

        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return {theme, toggleTheme};
}
