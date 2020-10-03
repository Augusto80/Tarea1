function obtenerlistausuarios () {

    var listausuarios = JSON.parse(localStorage.getItem('listausuariosls'));
    
    if (listausuarios == null) {
        listausuarios = 
        [
            ['1','cesar','castro','admin','admin','1'],
            ['2','rafael','jaraba','rafael@gmail.com','admin','2']
        ]

    }
    return listausuarios; 
}

function validarcredenciales (correo, password) {
    var listausuarios = obtenerlistausuarios(); 
    var acceso = false; 

    for (var i=0; i < listausuarios.length; i++){
        if(correo == listausuarios[i][3] && password == listausuarios [i][4]){
            acceso = true; 
            sessionStorage.setItem('rolusuarioActivo',listausuarios [i][0]+ ' ' + listausuarios [i][2]);
        }

    }
    return acceso; 
}