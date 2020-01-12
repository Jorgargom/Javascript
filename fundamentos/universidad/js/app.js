const buscador = document.querySelector('#buscador');

//busqueda.addEventListener('keydown', obtenerEvento);
//busqueda.addEventListener('keyup', obtenerEvento);
//buscador.addEventListener('keypress', obtenerEvento);
//buscador.addEventListener('focus', obtenerEvento);
//buscador.addEventListener('blur', obtenerEvento);
//buscador.addEventListener('cut', obtenerEvento);
//buscador.addEventListener('copy', obtenerEvento);
//buscador.addEventListener('paste', obtenerEvento);
//buscador.addEventListener('input', obtenerEvento);
buscador.addEventListener('change', obtenerEvento);



function obtenerEvento(e) {
    
    //document.querySelector('#encabezado').innerText = buscador.value;
    console.log(`EVENTO: ${e.type}`);
        
}

