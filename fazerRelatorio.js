function contarNumeroVogais (value) {
    let totalVogal = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u',`A`,`E`,`I`,`O`,`U`];
    let i;

    for (i = 0; i < value.length; i++ ) {
        if(vogais.indexOf(value[i]) != -1) {
            totalVogal++;
        }
    }

    return totalVogal;
}

function inverter(value) {
    let o = '';
    for (let i = value.length - 1; i >= 0; i--) {
        o += value[i];
    }
    return o;
}

function fazerRelatorio(value){
    const numeroVogais = contarNumeroVogais(value)
    const palavraInvertida = inverter(value)

    return{
        palavra: value,
        palavraInverso: palavraInvertida,
        numeroVogais: numeroVogais
    }
}

console.log(fazerRelatorio("Mirelle"))