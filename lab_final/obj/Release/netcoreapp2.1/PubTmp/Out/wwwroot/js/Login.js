function getvalidar(contraseña) {
    envio2 = JSON.stringify({ 'contrasena': contraseña })
    $.ajax({
        method: "POST",
        contentType: "application/json;charset=UTF-8",
        url: "Login/validar",
        data: envio2
    })        .done(function (msg) {
            if (msg = 1111) {
                window.location = "/Monitoreo/index";
            }
            else {
                window.alert("error")
            }
        }
        );
}

function onvalidar() {
    getvalidar(contrasenaa.value)
}
