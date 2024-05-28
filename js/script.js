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

function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//Cadastrar usuário

function cadastro() {
  // Validar entrada do usuário (nome, email, senha)
  if (validarEntrada()) {
    // Obter valores dos campos de entrada
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pass").value;

    // Criptografar senha (por exemplo, usando bcryptjs)
    //var senhaCriptografada = bcrypt.hashSync(senha, 10);

    // Criar objeto de dados do usuário
    var dadosUsuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    // Armazenar dados do usuário no array (utilizando localStorage)
    var usuariosCadastrados =
      JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
    usuariosCadastrados.push(dadosUsuario);
    localStorage.setItem(
      "usuariosCadastrados",
      JSON.stringify(usuariosCadastrados)
    );

    // Exibir mensagem de sucesso
    alert("Usuário cadastrado com sucesso!");

    // Limpar campos de entrada (opcional)
    limparCampos();

    // Redirecionar para login (ou outra página)
    window.location.href = "login.html";
  } else {
    // Exibir mensagem de erro de validação
    alert("Erro de validação. Por favor, verifique seus dados.");
  }
}

function validarEntrada() {
  // Obtendo os valores dos campos
  var usuario = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("pass").value;

  // Implementando lógica de validação para nome, email e senha
  var nomeValido = /^[a-zA-Z]+$/.test(usuario);
  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  var senhaValida = senha.length >= 8;

  // Exibindo mensagens de erro se os campos forem inválidos
  if (!nomeValido) {
    alert("Nome inválido. Use apenas letras.");
    return false; // Retorna falso se o nome for inválido
  }

  if (!emailValido) {
    alert("Email inválido. Por favor, insira um email válido.");
    return false; // Retorna falso se o email for inválido
  }

  if (!senhaValida) {
    alert("Senha inválida. A senha deve ter pelo menos 8 caracteres.");
    return false; // Retorna falso se a senha for inválida
  }

  // Retorna true se todos os campos forem válidos
  return true;
}

function limparCampos() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
}

//Validação de Login

function login() {
  // Obter valores dos campos de login
  var email = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  // Buscar usuário no array de usuários cadastrados
  var usuariosCadastrados =
    JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
  var usuarioEncontrado = usuariosCadastrados.find(function (usuario) {
    //return usuario.email === email && bcrypt.compareSync(senha, usuario.senha);
    return usuario.email === email && usuario.senha === senha;
  });

  /* if (usuarioEncontrado) {
    // Login bem-sucedido
    alert("Login efetuado com sucesso!");
    // Redirecionar para página restrita (ou outra página)

    var linkLogin = document.getElementById("login");
    linkLogin.style.display = "none"; // Oculta o link de login
    window.location.href = "index.html";
  } else {
    // Login falhou
    alert("Email ou senha inválidos. Tente novamente.");
  }*/

  if (usuarioEncontrado) {
    // Ocultar o link de login
    var linkLogin = document.getElementById("login");
    if (linkLogin) {
      linkLogin.style.display = "none"; // Oculta o link de login
    }

    // Exibir mensagem de login bem-sucedido
    alert("Login efetuado com sucesso!");

    // Redirecionar para página restrita (ou outra página)
    window.location.href = "index.html";
  } else {
    // Exibir mensagem de erro de login
    alert("Usuário ou senha incorretos. Por favor, tente novamente.");
  }
}

/*function login() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  var logado = false;

  // Percorrer o array de usuários para verificar se o usuário e a senha correspondem
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome === usuario && usuarios[i].senha === senha) {
      // Se encontrarmos um usuário com correspondência, definimos logado como true
      logado = true;
      break; // Não precisamos continuar a busca se já encontramos correspondência
    }
  }

  // Verificar se o usuário está logado ou não
  if (logado) {
    // Se logado for true, redirecionar para a página inicial
    window.location.href = "index.html";
  } else {
    // Se logado for false, exibir mensagem de erro
    alert("Acesso Negado: Dados incorretos!");
  }
}

/*function login() {
  var logado = 0;
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario == "admin" && senha == "123456") {
    //chamar a página do home
    window.location = "index.html";
    logado = 1;
  }

  if (logado == 0) {
    alert("Acesso Negado> Dados incorretos!");
  }
}
*/
//Ativar alert no botão cadastrar

// Array para armazenar os dados dos usuários

/*function cadastro() {
  var usuario = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;

  // Montar a mensagem com quebra de linha
  var mensagem =
    "Usuário: " +
    usuario +
    "\n" +
    "E-mail: " +
    email +
    "\n" +
    "Senha: " +
    senha;

  // Exibir os valores capturados em um alerta
  alert(mensagem);

  window.location.href = "index.html";
}*/

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
