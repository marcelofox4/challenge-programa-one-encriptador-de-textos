var inputTextArea = document.querySelector(".main_encript_content_area_textarea textarea");
var responseArea = document.querySelector(".main_encript_content_area_encript");

var btnEncriptar = document.querySelector(".criptografar");
btnEncriptar.addEventListener("click", criptografar);

var btnDescriptar = document.querySelector(".descriptografar")
btnDescriptar.addEventListener("click", descriptografar);

function criptografar() {
    if(inputTextArea.value.length > 0) {
        var texto = inputTextArea.value;
        var encriptarTexto = texto
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

        inputTextArea.value = "";
        responseArea.innerHTML = '<textarea style="font-family:Inter;font-size:26px;font-style:normal;color:#0A3871;background:#FFFFFF;resize:none;border:none;outline:none;width:350px;height:400px; ">' + encriptarTexto + '</textarea>';
    }
}

function descriptografar() {
    if(inputTextArea.value.length > 0) {
        var texto = inputTextArea.value;
        var descriptarTexto = texto
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

        inputTextArea.value = "";
        responseArea.innerHTML = '<textarea style="font-family:Inter;font-size:26px;font-style:normal;color:#0A3871;background:#FFFFFF;resize:none;border:none;outline:none;width:350px;height:400px; ">' + descriptarTexto + '</textarea>';
    }
}