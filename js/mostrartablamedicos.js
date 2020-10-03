llenarTabla(); 

function llenarTabla() {
    var tbody = document.querySelector('#tbmedicos tbody');

    tbody.innerHTML = '';

    var cRmedico = JSON.parse(localStorage.getItem('Rmedico')),
        cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEspecialidad = JSON.parse(localStorage.getItem('Especialidad')),
        cCelular = JSON.parse(localStorage.getItem('Celular')); 

    var nCantidadMedicos = cRmedico.length;  

    for (var i = 0; i < nCantidadMedicos; i++) {
        
        var fila = document.createElement('tr'); 

        var celdaRmedico = document.createElement('td'),
            celdaIdentificacion = document.createElement('td'),
            celdaNombres = document.createElement('td'),
            celdaApellidos = document.createElement('td'),
            celdaEspecialidad = document.createElement('td'),
            celdaCelular = document.createElement('td'),
            celdaModificar = document.createElement('td'),
            enlaceModificar = document.createElement('a');

            
            celdaModificar.setAttribute('class','btnEditar'); 
            celdaModificar.setAttribute('id',i)

            enlaceModificar.href = 'editarmedicos.html?id' +'='+i; 

        var nodoTextoRmedico = document.createTextNode(cRmedico[i]),
            nodoTextoIdentificacion = document.createTextNode(cIdentificacion[i]),
            nodoTextoNombres = document.createTextNode(cNombres[i]),
            nodoTextoApellidos = document.createTextNode(cApellidos[i]),
            nodoTextoEspecialidad = document.createTextNode(cEspecialidad[i]),
            nodoTextoCelular = document.createTextNode(cCelular[i]),
            nodoTextoModificar = document.createTextNode('Modificar'); 

            celdaRmedico.appendChild(nodoTextoRmedico); 
            celdaIdentificacion.appendChild(nodoTextoIdentificacion); 
            celdaNombres.appendChild(nodoTextoNombres); 
            celdaApellidos.appendChild(nodoTextoApellidos); 
            celdaEspecialidad.appendChild(nodoTextoEspecialidad); 
            celdaCelular.appendChild(nodoTextoCelular);  
            enlaceModificar.appendChild(nodoTextoModificar); 
            celdaModificar.appendChild(enlaceModificar); 

            fila.appendChild(celdaRmedico);
            fila.appendChild(celdaIdentificacion);
            fila.appendChild(celdaNombres);
            fila.appendChild(celdaApellidos); 
            fila.appendChild(celdaEspecialidad);
            fila.appendChild(celdaCelular); 
            fila.appendChild(celdaModificar); 

            tbody.appendChild(fila); 

    }
}

