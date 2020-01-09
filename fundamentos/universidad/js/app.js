
const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(function (impares) {
    impares.style.backgroundColor = 'red';
});


console.log(enlaces);