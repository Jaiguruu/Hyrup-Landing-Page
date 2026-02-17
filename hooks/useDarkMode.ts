import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;

        const checkDark = () => {
            setIsDark(html.classList.contains("dark"));
        };

        // Initial check
        checkDark();

        // Set up observer to watch for class changes on the html element
        const observer = new MutationObserver(checkDark);

        observer.observe(html, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return isDark;
};
