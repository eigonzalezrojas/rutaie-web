const mostrarBtn = document.getElementById('accion-unidades');
const contenidoDiv = document.getElementById('contenido-unidades');



// Agrega un evento click al botón
mostrarBtn.addEventListener('click', function () {
  // Verifica si el div está oculto
  if (contenidoDiv.style.display === 'none' || contenidoDiv.style.display === '') {
      // Muestra el div
      contenidoDiv.style.display = 'block';
  } else {
      // Oculta el div si ya está visible
      contenidoDiv.style.display = 'none';
  }
});







