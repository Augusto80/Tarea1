
if (localStorage.getItem('Rmedico') != null) {
    var cRmedico = JSON.parse(localStorage.getItem('Rmedico')),
        cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEspecialidad = JSON.parse(localStorage.getItem('Especialidad')),
        cCelular = JSON.parse(localStorage.getItem('Celular'));

}

var id = getUrlVars()["id"],
    nRmedico = cRmedico[id],
    nIdentificacion = cIdentificacion[id],
    nNombres = cNombres[id],
    nApellidos = cApellidos[id],
    nEspecialidad = cEspecialidad[id],
    nCelular = cCelular[id],
    btnEditar = document.querySelector('#btnEditar');

      document.querySelector('#rmedico').value = nRmedico; 
      document.querySelector('#identificacion').value = nIdentificacion; 
      document.querySelector('#nombres').value = nNombres; 
      document.querySelector('#apellidos').value = nApellidos ; 
      document.querySelector('#especialidad').value = nEspecialidad; 
      document.querySelector('#celular').value = nCelular; 

      btnEditar.addEventListener('click', editar);
      
      function editar (){

        var nRmedico = document.querySelector('#rmedico').value,
            nIdentificacion = document.querySelector('#identificacion').value,
            nNombres = document.querySelector('#nombres').value,
            nApellidos = document.querySelector('#apellidos').value,
            nEspecialidad = document.querySelector('#especialidad').value,
            nCelular = document.querySelector('#celular').value; 
        
            cRmedico[id] = nRmedico; 
            cIdentificacion[id] = nIdentificacion;
            cNombres[id] = nNombres;
            cApellidos[id] = nApellidos;
            cEspecialidad[id] = nEspecialidad;
            cCelular[id] = nCelular;

            guardar(cRmedico,cIdentificacion,cNombres,cApellidos,cEspecialidad,cCelular); 
            window.location.href = 'cmedicos.html'; 

      }

      function guardar (pRmedico,pIdentificacion,pNombres,pApellidos,pEspecialidad,pCelular){

        localStorage.setItem('Rmedico', JSON.stringify(pRmedico));
        localStorage.setItem('Identificacion', JSON.stringify(pIdentificacion));
        localStorage.setItem('Nombres', JSON.stringify(pNombres));
        localStorage.setItem('Apellidos', JSON.stringify(pApellidos));
        localStorage.setItem('Especialidad', JSON.stringify(pEspecialidad));
        localStorage.setItem('Celular', JSON.stringify(pCelular));
      }

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}