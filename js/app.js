const languageButton = document.getElementById('languageButton');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Maneja el clic en el botón del menú de idiomas
languageButton.addEventListener('click', (event) => {
    // Evita que otros eventos bloqueen la apertura del menú desplegable
    event.stopPropagation();
    // Alterna la clase 'open' para mostrar/ocultar el menú desplegable
    languageButton.parentNode.classList.toggle('open');
});

// Cierra el menú desplegable cuando se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!languageButton.parentNode.contains(event.target)) {
        languageButton.parentNode.classList.remove('open');
    }
});

// Maneja el cambio de idioma y cierre del menú desplegable
dropdownMenu.addEventListener('click', (event) => {
    // Previene la acción por defecto del enlace
    event.preventDefault();
    // Obtiene el idioma seleccionado
    const selectedLanguage = event.target.getAttribute('data-lang');
    
    // Cambia el idioma utilizando la función 'changeLanguage'
    changeLanguage(selectedLanguage);
    // Cierra el menú desplegable
    languageButton.parentNode.classList.remove('open');
});

// Función para cambiar el idioma según la opción seleccionada
function changeLanguage(lang) {
    const currentPath = window.location.pathname;

    if (lang === 'es') {
        // Caso español
        if (currentPath.includes('en/indexx.html')) {
            location.href = '../index.html';
        } else if (currentPath.includes('en/aboutt.html')) {
            location.href = '../pages/about.html';
        } else if (currentPath.includes('en/productss.html')) {
            location.href = '../pages/products.html';
        } else if (currentPath.includes('en/furniture.html')) {
            location.href = '../pages/mobiliario.html';
        } else if (currentPath.includes('en/textiless.html')) {
            location.href = '../pages/textiles.html';
        } else {
            location.reload();
        }
    } else {
        // Caso inglés
        if (currentPath.includes('index.html')) {
            location.href = 'en/indexx.html';
        } else if (currentPath.includes('pages/about.html')) {
            location.href = '../en/aboutt.html';
        } else if (currentPath.includes('pages/products.html')) {
            location.href = '../en/productss.html';
        } else if (currentPath.includes('pages/mobiliario.html')) {
            location.href = '../en/furniture.html';
        } else if (currentPath.includes('pages/textiles.html')) {
            location.href = '../en/textiless.html';
        }
    }
}











