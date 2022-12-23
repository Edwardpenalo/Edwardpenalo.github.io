function login(){
    var form,pass,apellido;

    form = document.getElementsById("nombres").value;
    pass = document.getElementsById("passwosrd").value;
    apellido = document.getElementsById("apelllidos").value;

    if (form == "Usuario" && pass == "usario" || form == "Edward" && pass == "edward") {
      
        window.location= "contact.html";
    } 



}