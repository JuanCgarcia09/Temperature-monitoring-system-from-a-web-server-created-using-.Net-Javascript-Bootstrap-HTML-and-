var lacuenta = setInterval(contandoando, 1000)
var data1 = [0, 10, 5, 2, 20, 30, 45, 50, 1, 2]
var data2 = [0, 10, 5, 2, 20, 30, 45, 50, 1, 12]
var data3 = [0, 10, 5, 2, 20, 30, 45, 50, 1, 20]
var limiteup = [20, 30, 20]
var limitedow=[10,15,15]
const labels = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
];
const ddata1 = {
    labels: labels,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45,50,1,2],
    }]
};
const config1 = {
    type: 'line',
    data: ddata1,
    options: {}
};
const ddata2 = {
    labels: labels,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 50, 1, 12],
    }]
};
const config2 = {
    type: 'line',
    data: ddata2,
    options: {}
};

const ddata3 = {
    labels: labels,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 50, 1, 22],
    }]
};
const config3 = {
    type: 'line',
    data: ddata3,
    options: {}
};


const myChart = new Chart(
    $('#myChart'),
    config1
);
const myChart2 = new Chart(
    $('#myChart2'),
    config2
);
const myChart3 = new Chart(
    $('#myChart3'),
    config3
);
function actualizar(num,dato) {
    if (num == 0) {
        data1 = correr(data1,dato)
        myChart.data.datasets = [{
            label: 'Temperatura',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data1,
        }]
        myChart.update();
    }
    else if (num == 1) {
        data2 = correr(data2, dato)
        myChart2.data.datasets = [{
            label: 'Temperatura',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data2,
        }]
        myChart2.update();
    }
    else if (num == 2) {
        data3 = correr(data3, dato)
        myChart3.data.datasets = [{
            label: 'Temperatura',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data3,
        }]
        myChart3.update();
    }
    

}
function eliminar() {
    myChart.data.datasets.pop();
    myChart.update();
}
function correr(arreglo, dato) {
    for (var i = 0; i <= 9; i++) {
        if (i == 9) {
            arreglo[i] = dato;
        }
        else {
            arreglo[i] = arreglo[i+1]
        }
    }
    return arreglo;
}
function contandoando() {
    medida_actual = Math.random() * 15;
    medida_actual2 = Math.random() * 35;
    medida_actual3 = Math.random() * 21;
    var tiempoTranscurrido = Date.now();
    var hoy = new Date(tiempoTranscurrido);
    envio = JSON.stringify({ 'dispositivoid': 1, 'nombre': 'Casa', 'medida_actual': Math.round(medida_actual), 'limite_maximo': limiteup[0], 'limite_minimo': limitedow[0], 'factualizar': 1 })
    envio2 = JSON.stringify({ 'nombre': 'Apartamento', 'medida_actual': Math.round(medida_actual2) })
    envio3 = JSON.stringify({ 'nombre': 'Parqueadero', 'medida_actual': Math.round(medida_actual3) })
    $.ajax({
        method: "POST",
        contentType: "application/json;charset=UTF-8",
        url: "settemperatura",
        data: envio
    })        .done(function (msg) {
            
            }
    );
    $.ajax({
        method: "POST",
        contentType: "application/json;charset=UTF-8",
        url: "settemperatura",
        data: envio2
    })        .done(function (msg) {

        }
    );
    $.ajax({
        method: "POST",
        contentType: "application/json;charset=UTF-8",
        url: "settemperatura",
        data: envio3
    })        .done(function (msg) {

        }
        );
    $.ajax({
        method: "POST",
        url: "actualizar",
        data: { name: "John", location: "Boston" }
    })        .done(function (msg) {
            for (let i of msg) {
                if (i.factualizar == 1) {
                    actualizar(i.dispositivoid - 1, i.medida_actual)
                    var id = ".text1" + i.dispositivoid
                    var se = $(id)
                    se.html('')
                    se.append("temperatura actual: " + i.medida_actual)
                    var id2 = ".text2" + i.dispositivoid
                    var se2 = $(id2)
                    if (i.medida_actual > i.limite_maximo) {
                        se2.html('')
                        se2.append("Alta")
                    }
                    else if (i.medida_actual < i.limite_minimo) {
                        se2.html('')
                        se2.append("Baja")
                    }
                    else {
                        se2.html('')
                        se2.append("Normal")
                    }
                    var id3 = ".fecha1" + i.dispositivoid
                    var se3 = $(id3)
                    se3.html('')
                    se3.append("Actualizado: "+hoy.toLocaleDateString()) 
                    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
                    var id4 = ".fecha2" + i.dispositivoid
                    var se4 = $(id4)
                    se4.html('')
                    se4.append("Actualizado: "+hora) 
                    $.ajax({
                        method: "POST",
                        contentType: "application/json;charset=UTF-8",
                        url: "bajarflag",
                        data: JSON.stringify({ 'dispositivoid': i.dispositivoid})
                    })
                        .done(function (msg) {

                        })
                }
            }
        });
}
function Dispoo() {
    window.location = "/Dispo/index";
}
function Contraa(){
    window.location = "/Contrasena/index";
}