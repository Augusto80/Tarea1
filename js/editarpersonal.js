
if (localStorage.getItem('Identificacion') != null) {
    var cIdentificacion = JSON.parse(localStorage.getItem('Identificacion')),
        cCargos = JSON.parse(localStorage.getItem('Cargos')),
        cNombres = JSON.parse(localStorage.getItem('Nombres')),
        cApellidos = JSON.parse(localStorage.getItem('Apellidos')),
        cEmail = JSON.parse(localStorage.getItem('Email')),
        cCelular = JSON.parse(localStorage.getItem('Celular'));

}

var id = getUrlVars()["id"],
    nIdentificacion = cIdentificacion[id],
    nCargos = cCargos[id],
    nNombres = cNombres[id],
    nApellidos = cApellidos[id],
    nEmail = cEmail[id],
    nCelular = cCelular[id],
    btnEditar = document.querySelector('#btnEditar'); 

      document.querySelector('#identificacion').value = nIdentificacion; 
      document.querySelector('#cargos').value = nCargos; 
      document.querySelector('#nombres').value = nNombres; 
      document.querySelector('#apellidos').value = nApellidos ; 
      document.querySelector('#email').value = nEmail; 
      document.querySelector('#celular').value = nCelular; 

      btnEditar.addEventListener('click', editar);
      
      function editar (){

        var nIdentificacion = document.querySelector('#identificacion').value,
        nCargos = document.querySelector('#cargos').value,
        nNombres = document.querySelector('#nombres').value,
        nApellidos = document.querySelector('#apellidos').value,
        nEmail = document.querySelector('#email').value,
        nCelular = document.querySelector('#celular').value;

        
        cIdentificacion[id] = nIdentificacion;
        cCargos[id] = nCargos; 
        cNombres[id] = nNombres;
        cApellidos[id] = nApellidos;
        cEmail[id] = nEmail;
        cCelular[id] = nCelular;

        guardar(cIdentificacion,cCargos,cNombres,cApellidos,cEmail,cCelular); 
        window.location.href = 'cpersonal.html'; 

      }

      function guardar (pIdentificacion,pCargos,pNombres,pApellidos,pEmail,pCelular){

        localStorage.setItem('Identificacion', JSON.stringify(pIdentificacion));
        localStorage.setItem('Cargos', JSON.stringify(pCargos));
        localStorage.setItem('Nombres', JSON.stringify(pNombres));
        localStorage.setItem('Apellidos', JSON.stringify(pApellidos));
        localStorage.setItem('Email', JSON.stringify(pEmail));
        localStorage.setItem('Celular', JSON.stringify(pCelular));
      }

      function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }