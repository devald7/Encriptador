var btnTwo = document.querySelector("#btnD");
var message = document.querySelector("#insert-text").value;


function decryptor(){
    document.getElementById("men").style.display = "none";
    var msgDecryptor = "";
    var message = document.querySelector("#insert-text").value;
    var capitaL = /[A-Z]/g;
    var chars = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(message == ""){
        alert("Introduzca algum texto");
        resultt(no);
        document.getElementById('men').style.display = "";
    }else if(message.match(capitaL) != message.match(capitaL)){
        alert("No se aceptan mayúsculas");
        resultt(no);
        document.getElementById('men').style.display = "";
    }else if(message.match(chars) != message.match(chars)){
        alert("No se puede usar acentuación ni carácteres especiales");
        resultt(no);
        document.getElementById('men').style.display = "";
    }else{
        msgDecryptor = message.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
        document.getElementById('result').innerHTML=msgDecryptor;
        document.getElementById('titler').innerHTML=successDecryption;

        resultt(yes);
        document.getElementById('insert-text').value = "";
    }
}

btnTwo.onclick = decryptor;


