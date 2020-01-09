
const links = document.getElementsByTagName('a');

let enlaces = Array.from(links);

enlaces.forEach(function (enlace) {
    console.log(enlace.textContent);
});


console.log(enlaces);