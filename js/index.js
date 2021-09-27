var enviarBoton = document.getElementById("enviar");

enviarBoton.addEventListener('click', function(evento){
    if(dni.value.length != 8){
        alert("El DNI debe tener 8 digitos");
    }
    else if(password.value.length < 4){
        alert("La contraseña debe tener 4 o mas caracteres");
        }
    else{
        evento.preventDefault()
        window.location.href = 'home.html'
    }  
});

