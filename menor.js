var numeros = [];

function menor(numeros){
    var menor = numeros[0];
    var index = 0;
    for (let i = 1; i < numeros.length; i++) {
        if(menor < numeros[i]) {
            menor = numeros[i];
            index = i;
        }
    }
    return index;
}