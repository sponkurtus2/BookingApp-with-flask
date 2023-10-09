// Change the color theme of the web

function changeTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    // Actualizar el elemento dentro de html
    document.documentElement.setAttribute('data-theme', newTheme)

    // Cambiar el color del marcado

    // Marcado de la primera seccion
    const markElement = document.getElementById('custom-highlight')
    if (newTheme === 'light') {
        markElement.style.backgroundColor = 'rgba(0, 172, 193, 0.5)'; // Color de fondo para light theme
    } else {
        markElement.style.backgroundColor = 'rgba(67, 160, 71, 0.5)'; // Color de fondo para dark theme
    }

    // Marcado de top countries
    const markCountryElement = document.getElementById('custom-highlight-country')
    if (newTheme === 'light') {
        markCountryElement.style.backgroundColor = 'rgba(0, 172, 193, 0.5)'; // Color de fondo para light theme
    } else {
        markCountryElement.style.backgroundColor = 'rgba(67, 160, 71, 0.5)'; // Color de fondo para dark theme
    }

    // Marcado de top places
    const markPlaceElement = document.getElementById('custom-highlight-places')
    if (newTheme === 'light') {
        markPlaceElement.style.backgroundColor = 'rgba(0, 172, 193, 0.5)'
    } else {
        markPlaceElement.style.backgroundColor = 'rgba(67, 160, 71, 0.5)'
    }
}




