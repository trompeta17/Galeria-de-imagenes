// Número de columnas en tu galería
const NUM_COLUMNAS = 4;
document.addEventListener("DOMContentLoaded", cargarImagenes);

async function cargarImagenes() {
    try {
        // Llamar al endpoint del backend
        const respuesta = await fetch('/api/galeria');
        const imagenes = await respuesta.json();

        // Crear columnas para la galería
        const galeria = document.getElementById('galeria');
        const columnas = [];

        for (let i = 0; i < NUM_COLUMNAS; i++) {
            const columna = document.createElement('div');
            columna.className = 'columna';
            columnas.push(columna);
            galeria.appendChild(columna);
        }

        // Distribuir las imágenes en las columnas
        imagenes.forEach((imagen, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imagen.url;
            imgElement.alt = imagen.tipo;
            columnas[index % NUM_COLUMNAS].appendChild(imgElement);
        });
    } catch (error) {
        console.error('Error al cargar las imágenes:', error);
    }
}
// Cargar imágenes al cargar la página
async function cargarImagenesPorTipo(tipo) {
    try {
        const respuesta = await fetch(`/api/galeria/tipo?tipo=${tipo}`);
        const imagenes = await respuesta.json();

        const galeria = document.getElementById('galeria');
        galeria.innerHTML = ''; // Limpiar las imágenes actuales

        const columnas = [];
        for (let i = 0; i < NUM_COLUMNAS; i++) {
            const columna = document.createElement('div');
            columna.className = 'columna';
            columnas.push(columna);
            galeria.appendChild(columna);
        }

        imagenes.forEach((imagen, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imagen.url;
            imgElement.alt = imagen.tipo;
            columnas[index % NUM_COLUMNAS].appendChild(imgElement);
        });
    } catch (error) {
        console.error('Error al cargar las imágenes:', error);
    }
}
