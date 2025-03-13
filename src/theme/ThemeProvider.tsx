'use client'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/theme/ThemeContext";
import React, {FC, useEffect, useMemo, useState} from "react";



interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);

    useEffect(() => {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);



    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;