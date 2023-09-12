const notas = [10, 9.5, 8, 7, 6, 3, 1, 0.5, 0];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notas, "\n+1 ponto extra (s/ passar de 10)")
console.log(notasAtualizadas);

let aprovado = false;

const notaSituacao = notas.map((nota) => {
  return nota >= 6 ? aprovado = true : aprovado = false;
});

console.log(notaSituacao);
console.log("\nPunição!!! (retirando 1 ponto de todos)")

const notasPunidas = notas.map((nota) => {
  return nota - 1 >= 0 ? nota - 1 : 0;
});
console.log(notas);
console.log (notasPunidas);