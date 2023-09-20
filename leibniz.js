var numero;

function Leibniz(numero){
    var suma = 0;
    for (let i = 0; i <= numero; i++) {
        suma += (((-1) ** i) / ((2 * i) + 1))
    }
    return suma;
}