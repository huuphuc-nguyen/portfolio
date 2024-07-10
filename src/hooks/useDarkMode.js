import React from 'react'

// This hook handles the dark mode toggle

const useDarkMode = () => { 

    const [darkMode, setDarkMode] = React.useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return {darkMode, handleDarkModeToggle};

}

export default useDarkMode;