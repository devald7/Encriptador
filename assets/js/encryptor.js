var btnOne = document.querySelector("#btnE");
var btnCopy = document.querySelector("#btn-copy");

var successEncryption = "Texto Criptografado:";
var successDecryption = "Texto Descriptografado:";

var yes = '';
var no = 'none';

function resultt(ver){
    document.getElementById("container-result").style.display = ver;
    document.getElementById("btn-copy").style.display = ver;
    document.getElementById("result").style.display = ver;
}

document.getElementById("men").style.display = "";
resultt(no);

function encryptt(){
    document.getElementById("men").style.display= "none";
    var msgEncryptor = "";
    var message = document.querySelector("#insert-text").value;
    var capitaL = /[A-Z]/g;
    var chars = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(message == ""){
        alert("Introduzca algum texto");
        document.getElementById("men").style.display = "";
        resultt(no);
    }else if(message.match(capitaL) != message.match(capitaL)){
        alert("No se aceptan mayúsculas");
        document.getElementById("men").style.display = "";
    }else if(message.match(chars) != message.match(chars)){
        alert("No se puede usar acentuación ni carácteres especiales");
        document.getElementById("men").style.display = "";
    }else {
        for(var i = 0; i < message.length; i++){
            if(message[i] == "a"){
                var encrypting = message[i].replace('a','ai');
                msgEncryptor = msgEncryptor + encrypting;
            }else if(message[i] == "e"){
                var encrypting = message[i].replace('e','enter');
                msgEncryptor = msgEncryptor + encrypting;
            }else if(message[i] == "i"){
                var encrypting = message[i].replace('i','imes');
                msgEncryptor = msgEncryptor + encrypting;
            }else if(message[i] == "o"){
                var encrypting = message[i].replace('o','ober');
                msgEncryptor = msgEncryptor + encrypting;
            }else if(message[i] == "u"){
                var encrypting = message[i].replace('u','ufat');
                msgEncryptor = msgEncryptor + encrypting;
            }else{
                msgEncryptor = msgEncryptor + message[i];
            }
        }

        document.getElementById("titler").innerHTML=successEncryption;
        document.getElementById("result").innerHTML=msgEncryptor;
        document.getElementById("insert-text").value = "";
        resultt(yes);
    }   
}

btnOne.onclick = encryptt;