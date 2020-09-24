

function llenarTabla() {
    var tbody = document.querySelector('#tbpersonal tbody');

    tbody.innerHTML = '';

    var cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cCargos = JSON.parse(localStorage.getItem('Cargos'))
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEmail = JSON.parse(localStorage.getItem('Email')),
        cCelular = JSON.parse(localStorage.getItem('Celular'));


    var nCantidadPersonal = cIdentificacion.length;

    for (var i = 0; i < nCantidadPersonal; i++) {

        var fila = document.createElement('tr');

        var celdaIdentificacion = document.createElement('td'),
            celdaCargos = document.createElement('td'),
            celdaNombres = document.createElement('td'),
            celdaApellidos = document.createElement('td'),
            celdaEmail = document.createElement('td'),
            celdaCelular = document.createElement('td');

        var nodoTextoIdentificacion = document.createTextNode(cIdentificacion[i]),
            nodoTextoCargos = document.createTextNode(cCargos[i]),
            nodoTextoNombres = document.createTextNode(cNombres[i]),
            nodoTextoApellidos = document.createTextNode(cApellidos[i]),
            nodoTextoEmail = document.createTextNode(cEmail[i]),
            nodoTextoCelular = document.createTextNode(cCelular[i]); 

            celdaIdentificacion.appendChild(nodoTextoIdentificacion);
            celdaCargos.appendChild(nodoTextoCargos);  
            celdaNombres.appendChild(nodoTextoNombres); 
            celdaApellidos.appendChild(nodoTextoApellidos); 
            celdaEmail.appendChild(nodoTextoEmail); 
            celdaCelular.appendChild(nodoTextoCelular); 

            
            fila.appendChild(celdaIdentificacion); 
            fila.appendChild(celdaCargos);
            fila.appendChild(celdaNombres); 
            fila.appendChild(celdaApellidos); 
            fila.appendChild(celdaEmail); 
            fila.appendChild(celdaCelular);
            
            tbody.appendChild(fila); 

    }
}

