var notas = [5, 10, 8, 6, 9]

var notaFinal = calculaMediaNotas(notas)

var notaFixada = notaFinal.toFixed(2)

function calculaMediaNotas(notas){
    return notas.reduce((t, n) => n + t, 0)/notas.length
}