const notas = [7, 7, 8, 9];
const novasNotas = [...notas, 10];

const notasCorretas = [6.1, 6.2];
const notasRetiradas = notas.splice(0, 2, notasCorretas); //recortando e substituindo

console.log(`As novas notas são: ${novasNotas}`);
console.log(`As notas originais são: ${notas}`);
console.log(`\nForam inseridas as notas (${notasCorretas}) no lugar de (${notasRetiradas})`)
