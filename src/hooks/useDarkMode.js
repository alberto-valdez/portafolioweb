import { useEffect, useState } from "react";

export default function useDarkMode(){

    const [theme, setTheme] = useState(window.localStorage.getItem('theme'));
    const colortheme = theme === 'dark' ? 'light' : 'dark';
    


   
   

    useEffect(()=>{
        window.localStorage.setItem('theme', theme);
        const root = window.document.documentElement;
        root.classList.remove(colortheme);
        root.classList.add(theme);

    },[theme, colortheme])

    return {colortheme, setTheme, theme}
}