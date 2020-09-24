var cTipo = [],
    cIdentificacion = [],
    cNombres = [],
    cApellidos = [],
    cEmail = [],
    cCelular = [],
    cDireccion = [],
    cCiudad = [],
    cSintomas = []; 

    if (localStorage.getItem('Tipo') != null) {
        cTipo = JSON.parse (localStorage.getItem('Tipo'));
        cIdentificacion = JSON.parse (localStorage.getItem('Identificacion'));
        cNombres = JSON.parse (localStorage.getItem('Nombres')); 
        cApellidos = JSON.parse (localStorage.getItem('Apellidos')); 
        cEmail = JSON.parse (localStorage.getItem('Email')); 
        cCelular = JSON.parse (localStorage.getItem('Celular')); 
        cDireccion = JSON.parse (localStorage.getItem('Direccion'));
        cCiudad = JSON.parse (localStorage.getItem('Ciudad'));
        cSintomas = JSON.parse (localStorage.getItem('Sintomas'));

    }

var elementoBotonRegistrar = document.querySelector('#btnRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarpaciente);

function registrarpaciente() {

    var nTipo = document.querySelector('#tipo').value,
        nIdentificacion = document.querySelector('#identificacion').value,
        nNombres = document.querySelector('#nombres').value,
        nApellidos = document.querySelector('#apellidos').value,
        nEmail = document.querySelector('#email').value,
        nCelular = document.querySelector('#celular').value;
        nDireccion = document.querySelector('#direccion').value,
        nCiudad = document.querySelector('#ciudad').value,
        nSintomas = document.querySelector('#sintomas').value;

        
        cIdentificacion.push(nIdentificacion);
        cTipo.push(nTipo); 
        cNombres.push(nNombres);
        cApellidos.push(nApellidos);
        cEmail.push(nEmail);
        cCelular.push(nCelular);
        cDireccion.push(nDireccion);
        cCiudad.push(nCiudad);
        cSintomas.push(nSintomas);

        localStorage.setItem('Tipo', JSON.stringify(cTipo));
        localStorage.setItem('Identificacion', JSON.stringify(cIdentificacion));
        localStorage.setItem('Nombres', JSON.stringify(cNombres));
        localStorage.setItem('Apellidos', JSON.stringify(cApellidos));
        localStorage.setItem('Email', JSON.stringify(cEmail));
        localStorage.setItem('Celular', JSON.stringify(cCelular));
        localStorage.setItem('Direccion', JSON.stringify(cDireccion));
        localStorage.setItem('Ciudad', JSON.stringify(cCiudad));
        localStorage.setItem('Sintomas', JSON.stringify(cSintomas));

    llenarTabla();

}