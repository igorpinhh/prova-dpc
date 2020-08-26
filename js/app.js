$(document).ready(function() {
           
  $("#cep").keypress(function() {
    var cep = $('#cep').val()
    if (cep != "") {
  $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

    if (!("erro" in dados)) {
        $("#rua").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#cidade").val(dados.localidade);
        $("#uf").val(dados.uf);
        $("#ibge").val(dados.ibge);
  }})
  }})
})