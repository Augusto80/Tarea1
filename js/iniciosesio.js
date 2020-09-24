function obtenerlistausuarios () {

    var listausuarios = JSON.parse(localStorage.getItem('listausuariosls'));
    
    if (listausuarios == null) {
        listausuarios = [
        ['1','admin','admin','1']
        ['2','rafael@gmail.com','admin','2']
        ]

    }
    return listausuarios; 
}

function validarcredenciales (correo, password) {
    var listausuarios = obtenerlistausuarios(); 
    var acceso = false; 

    for (var i=0; i < listausuarios.length; i++){
        if(correo == listausuarios[i][1] && password == listausuarios [i][2]){
            acceso = true; 
            sessionStorage.setItem('usuarioActivo',listausuarios[i][1]);
            sessionStorage.setItem('rolusuarioActivo',listausuarios[i][3]); 
        }

    }
    return acceso; 
}