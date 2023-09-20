var numero;

function factorial(numero) {
    var resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado = resultado * i;    
    }
    return resultado;
}
