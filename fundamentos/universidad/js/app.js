// Event Bubling

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card')
const agregarCarrito = document.querySelector('.agregar-carrito')

card.addEventListener('click', function (e) {
 
    console.log('Click en card');
    e.stopPropagation();
});

infoCurso.addEventListener('click', function (e) {
 
    console.log('Click en infoCurso');
    e.stopPropagation();
    
});

agregarCarrito.addEventListener('click', function (e) {
 
    console.log('Click en agregarCarrito');
    e.stopPropagation();
    
});


