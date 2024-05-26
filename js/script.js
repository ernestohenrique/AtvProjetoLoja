//Carregar NavBar

// Função para carregar o conteúdo do Navbar
function carregarNavbar() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

// Chamar a função para carregar o Navbar ao carregar a página
window.addEventListener("DOMContentLoaded", carregarNavbar);

//efeito do botão voltar ao Topo

//Validação de Login

//Ativar alert no botão cadastrar

// Função para carregar o Footer
function carregarFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

// Chamar a função para carregar o Navbar ao carregar a página
window.addEventListener("DOMContentLoaded", carregarFooter);
