//Ventana emergente al hacer clic en boton
// Usando JQuery y SweetAlert

//Llenar las filas de la tabla desde json
$("#btn").on("click", function(){
    $.getJSON("personas.json", function(datos){
        $.each(datos.personas, function(i, item){
            //console.log(item);
            var fila = "<tr><td>" + item.nombre + "</td><td>" + item.apellido + "</td><td>" + item.edad + "</td></tr>";
            $("#tabla1 tbody").append(fila);
        });
    });
});
