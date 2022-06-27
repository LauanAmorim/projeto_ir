let salario = document.querySelector("#input-salario");
let nome = document.querySelector("#input-nome");
let btnEnviar = document.querySelector("#enviar");
let btnLimpar = document.querySelector("#limpar");
let nomeColumn = document.querySelector(".column-nome");
let salarioColumn = document.querySelector(".column-salario");
let impostoColumn = document.querySelector(".column-imposto");
const indiceSalario = [1903.58, 2826.05, 3751.05, 4664.68];
const indiceImposto = ["Isento", 142.8, 354.8, 636.13, 869.96];

const criarElemento = (condImposto) => {
  pNome = document.createElement("p");
  pNome.className = "pNome";
  pNome.textContent = nome.value;
  pNome.textContent = nome.value;
  nomeColumn.appendChild(pNome);

  pSalario = document.createElement("p");
  pSalario.className = "pSalario";
  pSalario.textContent = "R$" + salario.value;
  salarioColumn.appendChild(pSalario);

  pImposto = document.createElement("p");
  pImposto.className = "pImposto";
  pImposto.textContent = "R$" + condImposto;
  impostoColumn.appendChild(pImposto);
};

btnEnviar.addEventListener("click", () => {
  event.preventDefault();

  if (!salario || !nome) {
    alert("Existem campos vazios! Preencha corretamente.");
  } else if (isNaN(nome.value) == false) {
    alert("Campo nome não deve conter números.");
  } else {
    if (salario.value <= indiceSalario[0]) {
      criarElemento(indiceImposto[0]);
    } else if (
      salario.value > indiceSalario[0] &&
      salario.value <= indiceSalario[1]
    ) {
      criarElemento(indiceImposto[1]);
    } else if (
      salario.value > indiceSalario[1] &&
      salario.value <= indiceSalario[2]
    ) {
      criarElemento(indiceImposto[2]);
    } else if (
      salario.value > indiceSalario[2] &&
      salario.value <= indiceSalario[3]
    ) {
      criarElemento(indiceImposto[3]);
    } else if (salario.value > indiceSalario[3]) {
      criarElemento(indiceImposto[4]);
    }
    console.log(isNaN(nome.value));
  }
});

btnLimpar.addEventListener("click", () => {
  event.preventDefault();

  salario.value = "";
  nome.value = "";
});
