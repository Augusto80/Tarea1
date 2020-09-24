document.querySelector('#btnIngresar').addEventListener('click',iniciarsesion); 

function iniciarsesion(){
    var correo= ''; 
    var password = ''; 
    var acceso = false; 

    correo = document.querySelector('#correo').value;
    password = document.querySelector('#password').value; 
    
    acceso = validarcredenciales (correo, password) ;
    
    if (acceso == true){
        ingresar(); 
    }
}

function ingresar() {
    var rol = sessionStorage.getItem('rolusuarioActivo'); 
    switch(rol){
        case '1':
            window.location.href = '../html/admin.html'; 
        break;
        case '2':
            window.location.href = '../html/doctor.html'; 
        break;
        default:
            alert("dfsd"); 
        break;  
    }
}