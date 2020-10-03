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

function Login(){ 
    var done=0; 
    var correo=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (correo=="USUARIO1" && password=="CONTRASEÑA1") { 
        alert("PAGINA1"); 
    //window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (correo=="USUARIO2" && password=="CONTRASEÑA2") { 
        alert("PAGINA2"); 
    //window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (correo=="" && password=="") { 
        alert("ERRORS"); 
    //window.location="errorpopup.html"; 
    } 
    } 