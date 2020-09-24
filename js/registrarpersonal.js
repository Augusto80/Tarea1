var cIdentificacion = [],
    cCargos = [],
    cNombres = [],
    cApellidos = [],
    cEmail = [],
    cCelular = [];

if (localStorage.getItem('Identificacion') != null) {
    cIdentificacion = JSON.parse(localStorage.getItem('Identificacion'));
    cCargos = JSON.parse(localStorage.getItem('Cargos'));
    cNombres = JSON.parse(localStorage.getItem('Nombres'));
    cApellidos = JSON.parse(localStorage.getItem('Apellidos'));
    cEmail = JSON.parse(localStorage.getItem('Email'));
    cCelular = JSON.parse(localStorage.getItem('Celular'));
}

var elementoBotonRegistrar = document.querySelector('#btnRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarpersonal);

function registrarpersonal() {


    var nIdentificacion = document.querySelector('#identificacion').value,
        nCargos = document.querySelector('#cargos').value,
        nNombres = document.querySelector('#nombres').value,
        nApellidos = document.querySelector('#apellidos').value,
        nEmail = document.querySelector('#email').value,
        nCelular = document.querySelector('#celular').value;


    cIdentificacion.push(nIdentificacion);
    cCargos.push(nCargos);
    cNombres.push(nNombres);
    cApellidos.push(nApellidos);
    cEmail.push(nEmail);
    cCelular.push(nCelular);

    localStorage.setItem('Identificacion', JSON.stringify(cIdentificacion));
    localStorage.setItem('Cargos', JSON.stringify(cNombres));
    localStorage.setItem('Nombres', JSON.stringify(cNombres));
    localStorage.setItem('Apellidos', JSON.stringify(cApellidos));
    localStorage.setItem('Email', JSON.stringify(cEmail));
    localStorage.setItem('Celular', JSON.stringify(cCelular));

    llenarTabla();

}