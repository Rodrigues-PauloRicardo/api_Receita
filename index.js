const cnpjInput = document.querySelector('#input_cnpj');

function button_apagar(){ 
    cnpjInput.value = '';
}

function button_pesquisar(){ 
    const cnpj = cnpjInput.value.replace(/[^\d]+/g, '');

    $.ajax({
        'url': 'https://www.receitaws.com.br/v1/cnpj/' + cnpj,
        'type' : "GET",
        'dataType' : 'jsonp',
        'success' : function(dado){
            console.log(dado)
        }
    }) 
}

    
   
