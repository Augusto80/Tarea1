

function llenarTabla() {
    var tbody = document.querySelector('#tbpacientes tbody');

    tbody.innerHTML = '';

    var cTipo = JSON.parse(localStorage.getItem('Tipo')),
        cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEmail = JSON.parse(localStorage.getItem('Email')),
        cCelular = JSON.parse(localStorage.getItem('Celular'));
        cDireccion = JSON.parse(localStorage.getItem('Direccion'));
        cCiudad = JSON.parse(localStorage.getItem('Ciudad'));
        cSintomas = JSON.parse(localStorage.getItem('Sintomas'));

    var nCantidadPacientes = cTipo.length;

    for (var i = 0; i < nCantidadPacientes; i++) {

        var fila = document.createElement('tr');

        var celdaTipo = document.createElement('td'),
            celdaIdentificacion = document.createElement('td'),
            celdaNombres = document.createElement('td'),
            celdaApellidos = document.createElement('td'),
            celdaEmail = document.createElement('td'),
            celdaCelular = document.createElement('td'),
            celdaDireccion = document.createElement('td'),
            celdaCiudad = document.createElement('td'),
            celdaSintomas = document.createElement('td');

        var nodoTextoTipo = document.createTextNode(cTipo[i]),
            nodoTextoIdentificacion = document.createTextNode(cIdentificacion[i]),
            nodoTextoNombres = document.createTextNode(cNombres[i]),
            nodoTextoApellidos = document.createTextNode(cApellidos[i]),
            nodoTextoEmail = document.createTextNode(cEmail[i]),
            nodoTextoCelular = document.createTextNode(cCelular[i]); 
            nodoTextoDireccion = document.createTextNode(cDireccion[i]); 
            nodoTextoCiudad = document.createTextNode(cCiudad[i]); 
            nodoTextoSintomas = document.createTextNode(cSintomas[i]); 

            celdaTipo.appendChild(nodoTextoTipo); 
            celdaIdentificacion.appendChild(nodoTextoIdentificacion); 
            celdaNombres.appendChild(nodoTextoNombres); 
            celdaApellidos.appendChild(nodoTextoApellidos); 
            celdaEmail.appendChild(nodoTextoEmail); 
            celdaCelular.appendChild(nodoTextoCelular); 
            celdaDireccion.appendChild(nodoTextoDireccion); 
            celdaCiudad.appendChild(nodoTextoCiudad); 
            celdaSintomas.appendChild(nodoTextoSintomas); 

            fila.appendChild(celdaTipo); 
            fila.appendChild(celdaIdentificacion); 
            fila.appendChild(celdaNombres); 
            fila.appendChild(celdaApellidos); 
            fila.appendChild(celdaEmail); 
            fila.appendChild(celdaCelular);
            fila.appendChild(celdaDireccion);
            fila.appendChild(celdaCiudad);
            fila.appendChild(celdaSintomas); 

            tbody.appendChild(fila); 

    }
}

