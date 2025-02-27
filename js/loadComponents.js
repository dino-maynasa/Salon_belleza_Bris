document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar un archivo HTML en un contenedor
    function loadComponent(url, containerId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
            })
            .catch(error => console.error(`Error al cargar ${url}:`, error));
    }

    // Cargar Header y Footer
    loadComponent("header.html", "header-container");
    loadComponent("footer.html", "footer-container");
});
