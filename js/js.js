import 'animate.css';

new WOW().init();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

(function () {
    if (localStorage.getItem('theme') === 'dark_theme') {
        setTheme('dark_theme');
    } else {
        setTheme('light_theme');
    }
 })();

let changeicon = function(icon) {
     icon.classList.toggle("uil-sun")
        if (localStorage.getItem('theme') === 'dark_theme'){
            setTheme('light_theme');
        } else {
            setTheme('dark_theme');
        }
     }




// function to toggle between light and dark theme

// Immediately invoked function to set the theme on initial load
