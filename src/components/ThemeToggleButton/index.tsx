"use client";

import {useDarkMode} from "@/hooks/useDarkMode";
import Icon from "@/components/Icon";
import icons from "@/lib/icons/icons";

export default function ThemeToggleButton() {
    const {theme, toggleTheme} = useDarkMode();

    return (
        <button
            onClick={toggleTheme}
        >
            {theme === "dark" ?
                (
                    <Icon
                        icon={icons.moon}
                        className={"size-9 text-dark-600"}
                    />
                ) : (
                    <Icon
                        icon={icons.sun}
                        className={"size-9 text-light-600"}
                    />
                )}
        </button>
    );
}
