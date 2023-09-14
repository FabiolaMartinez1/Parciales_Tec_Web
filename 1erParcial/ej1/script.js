$("#registroForm").on("click", function(){
    //Ventana emergente OK
//     Swal.fire("Presionaste el botón");
// });
//     // Captura el evento submit del formulario
//     $("#registroForm").submit(function(event) {
        // Obtén los valores de los campos
        var nombre = $("#name").val();
        var email = $("#email").val();
        var pais = $("#country").val();

        // Inicializa las variables de validación
        var nameValid = true;
        var emailValid = true;
        var countryValid = true;

        // Validar el nombre
        if (nombre.length < 3) {
            nameValid = false;
            $("#nameError").text("El nombre debe tener al menos 3 caracteres.");
            Swal.fire("El nombre debe tener al menos 3 caracteres.");
            
        } else {
            nameValid = true;
            $("#nameError").text("");
        }

        // Validar el correo electrónico
        if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            emailValid = false;
            Swal.fire("El correo electrónico debe ser válido (contener '@' y '.').");
            $("#emailError").text("El correo electrónico debe ser válido (contener '@' y '.').");
        } else {
            emailValid = true;
            $("#emailError").text("");
        }

        // Validar el país
        if (pais == "") {
            countryValid = false;
            Swal.fire("El país debe seleccionarse de una lista desplegable.");
            $("#countryError").text("El país debe seleccionarse de una lista desplegable.");
        } else {
            countryValid = true;
            $("#countryError").text("");
        }

        // Devolver el resultado de la validación
        return nameValid && emailValid && countryValid;
    });
;