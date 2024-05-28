//efeito de esconder formulário de cadastro
// código para iniciar o Jquery

$(document).ready(function () {
  //javaScript normal
  //document.getElementById("botao-cadastrar").click
  $("#botao-cadastrar").click(function () {
    //Chamar o formulário de cadastro
    $("#form-cadastrar").slideToggle("slow");
    //fazer aparaecer e desaparecer
    $("#section-login").slideToggle("slow");
    //botao cadastrar desaparecer
    $("#botao-cadastrar").hide();
  });
});
