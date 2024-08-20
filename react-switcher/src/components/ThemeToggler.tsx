import { useState, useEffect } from "react";
const ThemeToggler = () => {
        const [ isDarkTheme, setDarkTheme ] = useState<boolean>(false);

        useEffect(() => {
            let theme = localStorage.getItem("Theme");
            if(theme == "Dark"){
                setDarkTheme(true);
            }
        }, []);

        useEffect(() => {
            localStorage.setItem("Theme", isDarkTheme ? "Dark" :  "Light");
            document.body.classList.toggle("dark-theme", isDarkTheme);
        }, [isDarkTheme]);



        const toogleTheme = () => {

            setDarkTheme(!isDarkTheme);
        };



        return (
            <label>
                <input type="checkbox" onClick={toogleTheme}/>
                <span>Lite Theme</span>
            </label>
        );



};

export default ThemeToggler;