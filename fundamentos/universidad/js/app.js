
const cursos = document.querySelectorAll('.card');

console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent  = 'Hola desde traversing');

/* 

nodeType
-----------
1 = Elementos
2 = Atributos
3 = Text Node
8 = comentarios
9 = documentos
10 = doctyoe 

*/

const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0].nextElementSibling.nextElementSibling);
console.log(enlaces[4].previousElementSibling.previousElementSibling);

