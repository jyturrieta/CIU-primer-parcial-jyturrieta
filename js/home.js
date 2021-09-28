var salir = document.getElementById("cerrarSesion");
var nombre = localStorage.getItem("nombre")

salir.addEventListener('click', function(evento){
    window.location.href = 'index.html'
})

document.getElementById("bienvenida").innerHTML = `Bienvenido a MiBA, ${nombre}!`
