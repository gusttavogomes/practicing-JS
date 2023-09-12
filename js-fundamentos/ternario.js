const idadeMinima = 18;
let idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
idadeCliente = 21;
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")