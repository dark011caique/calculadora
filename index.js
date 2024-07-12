const nome = "Deku"
let saldoVitorias =  calculoRankeadas(0, 0)
let nivel

function calculoRankeadas(vitorias, derrotas){
    let contador = vitorias - derrotas
    return contador
}


switch(true){
    case saldoVitorias > 1 &&saldoVitorias <= 10:
        nivel = "ferro"
    break;

    case saldoVitorias >=11 && saldoVitorias <= 20:
        nivel = "Bronze"
    break;

    case saldoVitorias >=21 && saldoVitorias <= 50:
        nivel = "Prata"
    break;

    case saldoVitorias >=51 && saldoVitorias <= 80:
        nivel = "Ouro"
    break;

    case saldoVitorias >=81 && saldoVitorias <= 90:
        nivel = "Diamante"
    break;

    case saldoVitorias >=91 && saldoVitorias <= 100:
        nivel = "Lendario"
    break;

    case saldoVitorias >=101:
        nivel = "Imortal"
    break;

    default:
        nivel = "Desconhecido"
}


console.log(`O Herói ${nome} tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);