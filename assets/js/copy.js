function copytoClipboard(){
    var copied = document.getElementById("result");
    copied.select();
    document.execCommand('copy');
}

btnCopy.onclick = copytoClipboard;