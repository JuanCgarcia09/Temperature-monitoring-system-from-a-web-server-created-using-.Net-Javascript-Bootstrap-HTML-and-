function ing() {
    if (Contra1.value != '' & Contra2.value!='')
    {
        if (Contra1.value == Contra2.value) {
            envio2 = JSON.stringify({ 'contrasena': Contra1.value })
            $.ajax({
                method: "POST",
                contentType: "application/json;charset=UTF-8",
                url: "setcontra",
                data: envio2
            })                .done(function (msg) {
                    window.alert("Se cambió la contraseña")
                }
                );
        }
        else {
            window.alert("Error")
        }
    }
    else {
        window.alert("Error")
    }
}
function bar11() {
    Contra1.value = ''
    Contra2.value = ''
}
function Monii() {
    window.location = "/Monitoreo/index";
}
function Dispoo() {
    window.location = "/Dispo/index";
}