// getElementbyId

let encabezado;

encabezado = document.getElementById('encabezado');

encabezado.style.background = '#333';
encabezado.style.color = 'white';
encabezado.style.padding = '20px';



// Cambiar el texto

encabezado.innerText = 'Los mejores Cursos';




console.log(encabezado);




// Eliminar de Local Storage
localStorage.clear();