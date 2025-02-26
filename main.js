let notas = [10, 9 , 7.5, 10];
let somaDasNotas = 0;

for (let i = 0; i < notas.length;  i++){
    somaDasNotas += notas[i];
}
let media = somaDasNotas / notas.length;

console.log(`A Média das notas é ${media}`)