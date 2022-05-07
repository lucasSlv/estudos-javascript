var aluno ={
    nome: 'Cláudio Silva Santos Junior',
    nota1: 8,
    nota2: 9,
    nota3: 8  
}

const media = (aluno.nota1+aluno.nota2+aluno.nota3)/3

if(media >= 8){
    console.log(`Seu nome é ${aluno.nome}, sua média foi de ${media.toFixed(2)} e você foi aprovado.`)
} else {
    console.log(`Seu nome é ${aluno.nome}, sua média foi de ${media.toFixed(2)} e você não foi aprovado.`)
}