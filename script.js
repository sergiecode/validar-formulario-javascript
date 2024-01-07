document.getElementById("formulario").addEventListener("submit", function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    } else {
        event.preventDefault();

        alert(
            'nombre: ' + document.getElementById('nombre').value + '\n' +
            'apellido: ' + document.getElementById('apellido').value + '\n' +
            'documento: ' + document.getElementById('documento').value + '\n' +
            'email: ' + document.getElementById('email').value + '\n' +
            'edad: ' + document.getElementById('edad').value + '\n' +
            'actividad: ' + document.getElementById('actividad').value + '\n' +
            'nivelEstudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
});

function validarFormulario() {
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(function (campo) {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == '') {
            mostrarError(errorCampo, "¡Este campo es requerido!");
            validacionCorrecta = false;

        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, "Debe tener al menos 3 letras.");
            validacionCorrecta = false;

        } else {
            ocultarError(errorCampo);
        }
    });

    let aceptoTerminos = document.getElementById("aceptoTerminos");
    let errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, "Debes aceptar los términos y condiciones.");
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    // Validación de email
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        mostrarError(errorEmail, "Ingrese un correo electrónico válido.");
        validacionCorrecta = false;
    } else {
        ocultarError(errorEmail);
    }

    // Validación de edad (ejemplo: debe ser mayor de 18)
    let edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");

    if (edad.value < 18) {
        mostrarError(errorEdad, "Debes ser mayor de 18 años.");
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    // Validación de actividad
    let actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");

    if (actividad.value === "") {
        mostrarError(errorActividad, "Selecciona tu actividad.");
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    // Validación de nivel de estudio
    let nivelEstudio = document.getElementById("nivelEstudio");
    let errorNivelEstudio = document.getElementById("errorNivelEstudio");

    if (nivelEstudio.value === "") {
        mostrarError(errorNivelEstudio, "Selecciona tu nivel de estudio.");
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }

    return validacionCorrecta;
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.style.display = "none";
}