var cRmedico = [],
    cIdentificacion = [],
    cNombres = [],
    cApellidos = [],
    cEspecialidad = [],
    cCelular = []; 

    if (localStorage.getItem('Rmedico') != null) {
         var cRmedico = JSON.parse (localStorage.getItem('Rmedico')),
        cIdentificacion = JSON.parse (localStorage.getItem('Identificacion')),
        cNombres = JSON.parse (localStorage.getItem('Nombres')),
        cApellidos = JSON.parse (localStorage.getItem('Apellidos')),
        cEspecialidad = JSON.parse (localStorage.getItem('Especialidad')),
        cCelular = JSON.parse (localStorage.getItem('Celular'));
    }

var elementoBotonRegistrar = document.querySelector('#btnRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarmedico);

function registrarmedico() {

    var nRmedico = document.querySelector('#rmedico').value,
        nIdentificacion = document.querySelector('#identificacion').value,
        nNombres = document.querySelector('#nombres').value,
        nApellidos = document.querySelector('#apellidos').value,
        nEspecialidad = document.querySelector('#especialidad').value,
        nCelular = document.querySelector('#celular').value;

        cRmedico.push(nRmedico); 
        cIdentificacion.push(nIdentificacion);
        cNombres.push(nNombres);
        cApellidos.push(nApellidos);
        cEspecialidad.push(nEspecialidad);
        cCelular.push(nCelular);

        llenarTabla();
        guardar(cRmedico,cIdentificacion,cNombres,cApellidos,cEspecialidad,cCelular); 
}

function guardar (pRmedico,pIdentificacion,pNombres,pApellidos,pEspecialidad,pCelular){

    localStorage.setItem('Rmedico', JSON.stringify(pRmedico));
    localStorage.setItem('Identificacion', JSON.stringify(pIdentificacion));
    localStorage.setItem('Nombres', JSON.stringify(pNombres));
    localStorage.setItem('Apellidos', JSON.stringify(pApellidos));
    localStorage.setItem('Especialidad', JSON.stringify(pEspecialidad));
    localStorage.setItem('Celular', JSON.stringify(pCelular));
        
  }

