const funcionario = {
    nome: 'Anthony Vitorio Alves Medeiros',
    salario: 2800     
}

const novosalario = funcionario.salario*0.18+funcionario.salario
 
if(novosalario > 3000){
    console.log(`Seu nome é ${funcionario.nome} e seu novo salário será de R$${novosalario} e você deverá declarar imposto.`)
} else {
  console.log(`Seu nome é ${funcionario.nome} e seu novo salário será de R$${novosalario} e você não deverá declarar imposto.`)
}