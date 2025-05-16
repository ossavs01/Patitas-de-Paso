

// Función para cargar contenido dinámico
function cargarHTML(ruta) {
    fetch(ruta)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenido-dinamico").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el contenido:", error));
}

// Agrega eventos para los enlaces del submenú
document.querySelectorAll(".submenu ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que el enlace recargue la página
        const ruta = link.getAttribute("href"); // Obtiene la ruta del archivo HTML
        cargarHTML(ruta);
    });
});