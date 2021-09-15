function Converter(){
    var valor = document.getElementById('valor').value
    var valorEmDolar = parseFloat(valor) 
    var valorEmReal = valorEmDolar * 5

    var textoValorConvertido = 'O Resultado em rais é R$' + valorEmReal
    var elementoValorConvertido = document.getElementById('valorConvertido')

    elementoValorConvertido.innerHTML = textoValorConvertido
}