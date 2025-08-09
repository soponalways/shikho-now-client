import React, { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState("dark"); 

    // Handle Side Effect 
    useEffect(() => { 
        const storedTheme = localStorage.getItem("theme") || "dark"; 
        setTheme(storedTheme)
    } , []); 


    return <ThemeContext value={{ theme , setTheme}}>
            {children}
    </ThemeContext>
};

export default ThemeProvider;