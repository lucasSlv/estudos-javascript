function contarNumeroVogais (value) {
    let totalVogal = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let i;

    for (i = 0; i < value.length; i++ ) {
        if(vogais.indexOf(value[i]) != -1) {
            totalVogal++;
        }
    }

    return totalVogal;
}
console.log(contarNumeroVogais("Mirelle"))

