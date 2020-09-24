var cIdentificacion = [],
    cRegistro = [],
    cNombres = [],
    cApellidos = [],
    cEspecialidad = [],
    cCelular = [];

    if (localStorage.getItem('Identificacion') != null) {
        cIdentificacion = JSON.parse (localStorage.getItem('Identificacion'));
        cRegistro = JSON.parse (localStorage.getItem('Registro'));
        cNombres = JSON.parse (localStorage.getItem('Nombres')); 
        cApellidos = JSON.parse (localStorage.getItem('Apellidos')); 
        cEspecialidad = JSON.parse (localStorage.getItem('Especialidad')); 
        cCelular = JSON.parse (localStorage.getItem('Celular')); 

    }

var elementoBotonRegistrar = document.querySelector('#btnRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarmedico);

function registrarmedico() {

    var nIdentificacion = document.querySelector('#identificacion').value,
        nRegistro = document.querySelector('#registro').value,
        nNombres = document.querySelector('#nombres').value,
        nApellidos = document.querySelector('#apellidos').value,
        nEspecialidad = document.querySelector('#especialidad').value,
        nCelular = document.querySelector('#celular').value;

        cIdentificacion.push(nIdentificacion);
        cRegistro.push(nRegistro);
        cNombres.push(nNombres);
        cApellidos.push(nApellidos);
        cEspecialidad.push(nEspecialidad);
        cCelular.push(nCelular);

        localStorage.setItem('Identificacion', JSON.stringify(cIdentificacion));
        localStorage.setItem('Registro', JSON.stringify(cRegistro));
        localStorage.setItem('Nombres', JSON.stringify(cNombres));
        localStorage.setItem('Apellidos', JSON.stringify(cApellidos));
        localStorage.setItem('Especialidad', JSON.stringify(cEspecialidad));
        localStorage.setItem('Celular', JSON.stringify(cCelular));

        llenarTabla();

}