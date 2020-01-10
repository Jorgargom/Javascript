// Reemplazar elementos

const nuevoEncabezado = document.createElement('h2');

// agregar una id
nuevoEncabezado.id = 'encabezado';

//agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// Elemento anterior será remplazado 

const anterior = document.querySelector('#encabezado');

const elementoPadre = document.querySelector('#lista-cursos');

elementoPadre.replaceChild(nuevoEncabezado, anterior)


console.log(elementoPadre);

console.log(anterior);

console.log(nuevoEncabezado);


const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

enlaces[0].remove();

console.log(enlaces);
console.log(navegacion);

