// Cotizador Construcor
// Constructor para Seguro
class Seguro{
    constructor(marca, anio, tipo)  {
         this.marca = marca;
         this.anio = anio;
         this.tipo = tipo;
    }
    cotizarSeguro(){
         /*
              1 = americano 1.15
              2 = asiatico 1.05
              3 = europeo 1.35
         */
         let cantidad;
         const base = 2000;
    
         switch(this.marca){
              case '1':
                   cantidad = base * 1.15;
                   break;
              case '2':
                   cantidad = base * 1.05;
                   break;
              case '3':
                   cantidad = base * 1.35;
                   break;
         }
    
         // Leer el año
         const diferencia = new Date().getFullYear() - this.anio;
         // Cada año de diferencia hay que reducir 3% el valor del seguro
         cantidad -= ((diferencia * 3) * cantidad) / 100;
         /*
              Si el seguro es básico se múltiplica por 30% mas
              Si el seguro es completo 50% mas
         */
        if(this.tipo === 'basico') {
             cantidad *= 1.30;
        } else {
             cantidad *= 1.50;
        }
    
         return cantidad;
    
    }
}


// Todo lo que se muestra
class Interfaz{
    mostrarMensaje(mensaje, tipo) {
         const div = document.createElement('div');
    
         if(tipo === 'error') {
              div.classList.add('mensaje','error');
         } else {
              div.classList.add('mensaje','correcto');
         }
         div.innerHTML = `${mensaje}`;
         formulario.insertBefore(div, document.querySelector('.form-group'));
    
         setTimeout(function() {
              document.querySelector('.mensaje').remove();
         }, 3000);
    } 
    mostrarResultado(seguro, total) {
         const resultado = document.getElementById('resultado');
         let marca;
         switch(seguro.marca) {
              case '1':
                   marca = 'Americano';
                   break;
              case '2':
                   marca = 'Asiatico';
                   break;
              case '3':
                   marca = 'Europeo';
                   break;
         }
         // Crear un div
         const div = document.createElement('div');
         // Insertar la informacion
         div.innerHTML = `
              <p class='header'>Tu Resumen: </p>
              <p>Marca: ${marca} </p>
              <p>Año: ${seguro.anio} </p>
              <p>Tipo: ${seguro.tipo} </p>
              <p> Total: $ ${total} </p>
         `;
    
         const spinner = document.querySelector('#cargando img');
         spinner.style.display = 'block';
         setTimeout(function() {
              spinner.style.display = 'none';
              resultado.appendChild(div);
         }, 3000);
         
    
    }
    
}