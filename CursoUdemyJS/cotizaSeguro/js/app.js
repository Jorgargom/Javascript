// Constructor

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


// Todo lo que se muestra

function Interfaz() {
    
}

// Mensaje que se imprime en el formulario

Interfaz.prototype.mostrarError = function (mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('mensaje','error')
    } else {
        div.classList.add('mensaje','correcto')

    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    
    setTimeout(() => {
        document.querySelector('.mensaje').remove();                
    }, 3000);
    
}



// EventListeners

const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
   
    // Leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    // Crear instancia de interfaz

    const interfaz = new Interfaz();

    if (marcaSeleccionada === '' || anioSeleccionado == '' || tipo === '') {
        interfaz.mostrarError('Faltan datos, revisar el formulario de nuevo')
    } else {
        console.log("ok");
    }

    console.log(tipo);
    
    console.log(anioSeleccionado);

    console.log(marcaSeleccionada);
    console.log("Presionado");
    
})

// Creo input con los ultimos 20 anios
const max = new Date().getFullYear(),
min = max - 20;


const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}