// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputadultos = document.getElementById("adultos")

let inputcriancas = document.getElementById("criancas")

let inputtime = document.getElementById("duracao")

let resultado = document.getElementById("resposta")

function calcular() {

    let adultos  = inputadultos.value;

    let crianca = inputcriancas.value;

    let duracao = inputtime.value;

    let qtecarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * crianca)

    let  qtecerveja = cervejapp(duracao) * adultos

    let  qtebebida = bebidapp(duracao) * adultos + (bebidapp(duracao) / 2 * crianca)

    resultado.innerHTML = `<p>${qtecarne/1000} g de carne </p>`

    resultado.innerHTML += `<p>${Math.ceil(qtecerveja/355)} latas de cerveja</p>`

    resultado.innerHTML += `<p>${Math.ceil(qtebebida/2000)} Garrafas de bebidas</p>`



    function carnepp(duracao) {

        if(duracao>=6){
            return 650
        }else{
            400
        }

    }

    function cervejapp(duracao) {

        if(duracao>=6){
            return 2000
        }else{
            1200
        }

    }

    function bebidapp(duracao) {

        if(duracao>=6){
            return 1500
        }else {
            return 1000}

    }




}