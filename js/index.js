var enviarBoton = document.getElementById("enviar");
var dniInput = document.getElementById("dni");
var passwordInput = document.getElementById("password")

enviarBoton.addEventListener('click', function(evento){
    if(dniInput.value.length != 8){
        alert("El DNI debe tener 8 digitos");
    }
    else if(passwordInput.value.length < 4){
        alert("La contraseña debe tener 4 o mas caracteres");
        }
    else{
        evento.preventDefault()
        localStorage.setItem("nombre", dniInput.value)
        window.location.href = 'home.html'
    }  
});

