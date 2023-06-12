var numero1 = parseInt(prompt("Digite o primeiro número:"));
var numero2 = parseInt(prompt("Digite o segundo número:"));
var numero3 = parseInt(prompt("Digite o terceiro número:"));

var maior = numero1;

if (numero2 > maior) {
  maior = numero2;
}

if (numero3 > maior) {
  maior = numero3;
}

console.log("O maior número é: " + maior);
