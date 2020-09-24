

function llenarTabla() {
    var tbody = document.querySelector('#tbmedicos tbody');

    tbody.innerHTML = '';

    var cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cRegistro = JSON.parse(localStorage.getItem('Registro')),
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEspecialidad = JSON.parse(localStorage.getItem('Especialidad')),
        cCelular = JSON.parse(localStorage.getItem('Celular'));

    var nCantidadMedicos = cIdentificacion.length;

    for (var i = 0; i < nCantidadMedicos; i++) {

        var fila = document.createElement('tr');

        var celdaIdentificacion = document.createElement('td'),
            celdaRegistro = document.createElement('td'),
            celdaNombres = document.createElement('td'),
            celdaApellidos = document.createElement('td'),
            celdaEspecialidad = document.createElement('td'),
            celdaCelular = document.createElement('td');

        var nodoTextoIdentificacion = document.createTextNode(cIdentificacion[i]),
            nodoTextoRegistro = document.createTextNode(cRegistro[i]),
            nodoTextoNombres = document.createTextNode(cNombres[i]),
            nodoTextoApellidos = document.createTextNode(cApellidos[i]),
            nodoTextoEspecialidad = document.createTextNode(cEspecialidad[i]),
            nodoTextoCelular = document.createTextNode(cCelular[i]); 

            celdaIdentificacion.appendChild(nodoTextoIdentificacion); 
            celdaRegistro.appendChild(nodoTextoRegistro); 
            celdaNombres.appendChild(nodoTextoNombres); 
            celdaApellidos.appendChild(nodoTextoApellidos); 
            celdaEspecialidad.appendChild(nodoTextoEspecialidad); 
            celdaCelular.appendChild(nodoTextoCelular); 

            fila.appendChild(celdaIdentificacion); 
            fila.appendChild(celdaRegistro); 
            fila.appendChild(celdaNombres); 
            fila.appendChild(celdaApellidos); 
            fila.appendChild(celdaEspecialidad); 
            fila.appendChild(celdaCelular); 

            tbody.appendChild(fila); 

    }



}

