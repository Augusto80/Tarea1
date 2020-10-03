
if (localStorage.getItem('Tipo') != null) {
    var cTipo = JSON.parse(localStorage.getItem('Tipo')),
        cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEmail = JSON.parse(localStorage.getItem('Email')),
        cCelular = JSON.parse(localStorage.getItem('Celular')),
        cDireccion = JSON.parse(localStorage.getItem('Direccion')),
        cCiudad = JSON.parse(localStorage.getItem('Ciudad')),
        cSintomas = JSON.parse(localStorage.getItem('Sintomas'));

}

var id = getUrlVars()["id"],
    nTipo = cTipo[id],
    nIdentificacion = cIdentificacion[id],
    nNombres = cNombres[id],
    nApellidos = cApellidos[id],
    nEmail = cEmail[id],
    nCelular = cCelular[id],
    nDireccion = cDireccion[id],
    nCiudad = cCiudad[id],
    nSintomas = cSintomas[id],
    btnEditar = document.querySelector('#btnEditar');

      document.querySelector('#tipo').value = nTipo; 
      document.querySelector('#identificacion').value = nIdentificacion; 
      document.querySelector('#nombres').value = nNombres; 
      document.querySelector('#apellidos').value = nApellidos ; 
      document.querySelector('#email').value = nEmail; 
      document.querySelector('#celular').value = nCelular; 
      document.querySelector('#direccion').value = nDireccion; 
      document.querySelector('#ciudad').value = nCiudad ; 
      document.querySelector('#sintomas').value = nSintomas;

      btnEditar.addEventListener('click', editar);
      
      function editar (){

        var nTipo = document.querySelector('#tipo').value,
        nIdentificacion = document.querySelector('#identificacion').value,
        nNombres = document.querySelector('#nombres').value,
        nApellidos = document.querySelector('#apellidos').value,
        nEmail = document.querySelector('#email').value,
        nCelular = document.querySelector('#celular').value,
        nDireccion = document.querySelector('#direccion').value,
        nCiudad = document.querySelector('#ciudad').value,
        nSintomas = document.querySelector('#sintomas').value;

        cTipo[id] = nTipo; 
        cIdentificacion[id] = nIdentificacion;
        cNombres[id] = nNombres;
        cApellidos[id] = nApellidos;
        cEmail[id] = nEmail;
        cCelular[id] = nCelular;
        cDireccion[id] = nDireccion;
        cCiudad[id] = nCiudad;
        cSintomas[id] = nSintomas;

        guardar(cTipo,cIdentificacion,cNombres,cApellidos,cEmail,cCelular,cDireccion,cCiudad,cSintomas); 
        window.location.href = 'cpaciente.html'; 

      }

      function guardar (pTipo,pIdentificacion,pNombres,pApellidos,pEmail,pCelular,pDireccion,pCiudad,pSintomas){

        localStorage.setItem('Tipo', JSON.stringify(pTipo));
        localStorage.setItem('Identificacion', JSON.stringify(pIdentificacion));
        localStorage.setItem('Nombres', JSON.stringify(pNombres));
        localStorage.setItem('Apellidos', JSON.stringify(pApellidos));
        localStorage.setItem('Email', JSON.stringify(pEmail));
        localStorage.setItem('Celular', JSON.stringify(pCelular));
        localStorage.setItem('Direccion', JSON.stringify(pDireccion));
        localStorage.setItem('Ciudad', JSON.stringify(pCiudad));
        localStorage.setItem('Sintomas', JSON.stringify(pSintomas));
      }

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}