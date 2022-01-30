$(document).ready(function() {
    
    var theme = $('#theme');
    var actualTheme = localStorage.getItem('theme'); 


    //Get The Actual Theme
    getTheme();
    
    $('#light-theme').click(function() {
        theme.attr('href', 'css/light-theme.css');
        localStorage.removeItem(theme);
        localStorage.setItem('theme', 'light');
    })
    
    $('#dark-theme').click(function() {
        theme.attr('href', 'css/dark-theme.css');
        localStorage.removeItem(theme);
        localStorage.setItem('theme', 'dark')
    })

    function getTheme() {
        if(actualTheme === 'dark') {
            theme.attr('href', 'css/dark-theme.css');
        }if(actualTheme === 'light') {
            theme.attr('href', 'css/light-theme');
        }    
    }

    

})