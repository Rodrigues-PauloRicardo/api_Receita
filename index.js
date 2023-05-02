const cnpjInput = document.querySelector('#input_cnpj');

const resultName = document.querySelector('.result_name');
const resultSituacao = document.querySelector('.result_situacao');
const resultCnpj = document.querySelector('.result_cnpj');
const resultAbertura = document.querySelector('.result_abertura');

const resultMunicipio = document.querySelector('.result_municipio');
const resultUf = document.querySelector('.result_uf');

const resultNaturezaJuridica = document.querySelector('.natureza_juridica');
const resultTelefone = document.querySelector('.result_telefone');



function button_apagar(){ 
 //   var result = document.querySelector('.result');
 //   if(result.style.display === 'block')  {
 //       result.style.display = 'none';
  //  }
    cnpjInput.value = '';
    resultName.innerText = '';
    resultSituacao.innerText = '';
    resultCnpj.innerText = '';
    resultAbertura.innerText = '';
    resultMunicipio.innerText = '';
    resultUf.innerText = '';
    resultNaturezaJuridica.innerText = '';
    resultTelefone.innerText = '';
    
}

function button_pesquisar(){ 
     const cnpj = cnpjInput.value.replace(/[^\d]+/g, '');

     if(cnpj === ''){
        alert('Por favor, digite um CNPJ válido.');
        return;
    }

    if(cnpj.length !== 14){
        alert('Por favor, digite um CNPJ válido.');
        return;
    } 
    

var result = document.querySelector('.result');
    if(result.style.display === 'block')  {
        result.style.display = 'none';
    } else {
        result.style.display = 'block';
    }


    $.ajax({
        'url': 'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
        'type' : "GET",
        'dataType' : 'jsonp',
        'success' : function(dado){  
            resultName.innerText = 'Nome: '+ dado.nome;
            resultSituacao.innerText = 'Situação: '+ dado.situacao;
            resultCnpj.innerText = 'CNPJ: ' + dado.cnpj;
            resultAbertura.innerText = 'Abertura: ' + dado.abertura;
            resultMunicipio.innerText = 'Município: ' + dado.municipio;
            resultUf.innerText = 'UF: ' + dado.uf;
            resultNaturezaJuridica.innerText = 'Natureza: ' + dado.natureza_juridica;
            resultTelefone.innerText = 'Telefone: ' + dado.telefone;
        }
    }) 
}


