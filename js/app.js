const languageButton = document.getElementById('languageButton');
const dropdownMenu = document.querySelector('.dropdown-menu');


languageButton.addEventListener('click', () => {
    languageButton.parentNode.classList.toggle('open');
});


document.addEventListener('click', (event) => {
    if (!languageButton.parentNode.contains(event.target)) {
        languageButton.parentNode.classList.remove('open');
    }
});


dropdownMenu.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedLanguage = event.target.getAttribute('data-lang');
    
    changeLanguage(selectedLanguage);
    languageButton.parentNode.classList.remove('open');
});

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











