function toggleTheme() {
    var theme = document.getElementsByTagName("link")[0];
    if (theme.getAttribute('href') == 'mainCSS/index.css') {
        theme.setAttribute('href', 'mainCSS/light.css');
    } else { theme.setAttribute('href', 'mainCSS/index.css');}
    
}