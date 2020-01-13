const listaTweets = document.getElementById('lista-tweets');





// Event Listeners


eventListeners();


function eventListeners() {
    // Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}













// Funciones

function agregarTweet(e) {
    e.preventDefault();
    
    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    
    // Crear el boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    
    // Crear el elemento y añadir a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el boton de borrar a la lista
    li.appendChild(botonBorrar);
    // Añade el tweet a la lista
    listaTweets.appendChild(li);

   

   

    console.log(tweet);
    
    
}
