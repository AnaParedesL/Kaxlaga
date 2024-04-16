
// Selecciona el elemento checkbox con la clase "check"
var check = document.querySelector(".check");

// Agrega un evento de clic al checkbox que ejecutará la función 'idioma'
check.addEventListener('click', idioma);

// La función 'idioma' se ejecuta cuando el checkbox es clicado
function idioma() {
    // Verifica si el checkbox está seleccionado
    let id = check.checked;
    
    // Redirige a una página específica según el estado del checkbox
    if (id) {
        // Si el checkbox está seleccionado, redirige a "es/index.html"
        location.href = "es/index.html";
    } else {
        // Si el checkbox no está seleccionado, redirige a "../index.html"
        location.href = "index.html";
    }
}




