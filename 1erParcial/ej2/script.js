let usuariosJSON = [
  {
    "nombre": "Juan Pérez",
    "correoElectronico": "juan@example.com",
    "pais": "Argentina"
  },
  {
    "nombre": "María González",
    "correoElectronico": "maria@example.com",
    "pais": "México"
  },
  {
    "nombre": "David Smith",
    "correoElectronico": "david@example.com",
    "pais": "Estados Unidos"
  },
  ];
  
  // Obtener el elemento HTML donde mostraremos los libros
  let librosContainer = document.getElementById("usuarios");
  
  // Recorrer los datos JSON y mostrarlos en la página
  usuariosJSON.forEach(function (libro) {
    let libroElement = document.createElement("div");
    libroElement.innerHTML =
      "<h2>" +
      libro.nombre +
      "</h2>" +
      "<p>Correo Electronico: " +
      libro.correoElectronico +
      "</p>" +
      "<p>Pais: " +
      libro.pais +
      "</p>";
    librosContainer.appendChild(libroElement);
  });
  