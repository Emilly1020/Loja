// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Lancheteria";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>X-Salada Simples da Casa</h2>
    <img src="https://i.ytimg.com/vi/zlZEDtopR8Q/hqdefault.jpg" alt="x-salada">
    <p>Pão com hamburguer, alface, tomate e queijo mussarela.</p>
    <p id="preco-x-salada">R$ 12.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)