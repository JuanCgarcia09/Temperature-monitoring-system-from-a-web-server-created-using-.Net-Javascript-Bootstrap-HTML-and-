var lacuenta2 = setInterval(contandoando2, 1000)
var tabla = $('.tablon')
function contandoando2() {
    $.ajax({
        method: "POST",
        url: "actualizar",
        data: { name: "John", location: "Boston" }
    })        .done(function (msg) {
            tabla.html('')
            tabla.append("<table>" +
                "<thead>" +
                "<tr>" +
                "<th>#</th>" +
                "<th>Nombre</th>" +
                "<th>Medida actual</th>" +
                "<th>Límite Máximo</th>" +
                "<th>Límite Mínimo</th>" +
                "<th>Acciones</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody id='res'>" +
                "</tbody>" +
                "</table>")
            for (let i of msg) {
                $('#res').append("<tr>" +
                    "<td>" + i.dispositivoid + "</td>" +
                    "<td>" + i.nombre + "</td>" +
                    "<td>" + i.medida_actual + "</td>" +
                    "<td>" + i.limite_maximo + "</td>" +
                    "<td>" + i.limite_minimo + "</td>" +
                    "<td>" + '<i class="fas fa - trash"></i> <i class="fas fa-tools"></i>' + "</td>" +
                    "</tr>"
                )
                }
        });
}
function Monii() {
    window.location = "/Monitoreo/index";
}
function Contraa() {
    window.location = "/Contrasena/index";
}