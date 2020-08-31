// o projeto deste app foi feito tanto com vanilla quanto jquery 
// ambas as versões funcionam perfeitamente
// vanilla apartir da linha 43


//versão jquery

$(document).ready(function(){

  $("#btn-busca").click(()=>{

    if($('#cep').val() === "") {
      alert('você precisa digitar um cep válido')
    } else {
      //armazena a url com os dados para a requisição
    let url = "https://viacep.com.br/ws/" + $("#cep").val() + "/json"
    
    //retorna os dados e os coloca nos inputs
    $.get(url, (data)=> {
      $("#uf").val(data.uf)
      $("#cidade").val(data.localidade)
      $("#bairro").val(data.bairro)
      $("#rua").val(data.logradouro)
      $("#ibge").val(data.ibge)
    })
    }
  });

  $("#btn-consulta").click(()=> {
    // armazena a url com estado, cidade e logradouro em uma variável para a requisição
    if ($('#uf').val() === "") {
      alert('campos de texto vazios')
    } else {
      console.log(1);
      let url = "https://viacep.com.br/ws/" + $("#uf").val() + "/" + $("#cidade").val() + "/" + $("#rua").val() + "/json"
    $.get(url, (data) => {
      //os dados retornados serão arrays, o foreach verifica qual deles é o correto
      //retorna os dados e os coloca nos inputs 
      data.forEach(el => {
        let str = "Rua " + $("#rua").val()
        if (el.logradouro = str) {
          $("#cep").val(el.cep)
          $("#cidade").val(el.localidade)
          $("#bairro").val(el.bairro)
          $("#rua").val(el.logradouro)
          $("#ibge").val(el.ibge)
        }
      });
    })
    }
  })

  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
})

// vanilla javascript abaixo

// const btnBusca = document.querySelector('#btn-busca')
// const btnConsulta = document.querySelector('#btn-consulta')

// let estado = document.querySelector("#uf"),
//     ibge = document.querySelector("#ibge"),
//     cidade = document.querySelector("#cidade"),
//     bairro = document.querySelector("#bairro"),
//     rua = document.querySelector("#rua"),
//     cep = document.querySelector("#cep");

// const url = "https://viacep.com.br/ws/"

// btnBusca.addEventListener('click', ()=> {
//   const cep = document.querySelector('#cep').value


//   fetch(url + cep + "/json", {
//     method: 'GET',
//   })
//     .then(res => res.json())
//     .then(data => {

//       estado.value = data.uf
//       ibge.value = data.ibge
//       cidade.value = data.localidade
//       bairro.value = data.bairro
//       rua.value = data.logradouro
//     })
// })

// btnConsulta.addEventListener('click', () => {
//   fetch(url + "/" + estado.value + "/" + cidade.value + "/" + rua.value + "/json", {
//     method: "GET",
//   })
//     .then(res => res.json())
//     .then(data => {
//       const str = "rua " + rua.value

//       data.forEach(el => {
//         if (el.logradouro = str) {
//           cep.value = el.cep
//           estado.value = el.uf
//           ibge.value = el.ibge
//           bairro.value = el.bairro
//         }
//       });
//     })
// })