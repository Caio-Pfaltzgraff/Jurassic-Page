function validaFormulario(){
    
    if(document.forms["criaNome"].nomePrimeira.value == ""){
        alert("É necessário preencher o primeiro campo");
        return;
    }
    
    if(document.forms["criaNome"].nomeUltima.value == ""){
        alert("É necessário preencher o segundo campo");
        return;
    }
    
    if(document.forms["criaNome"].sobrenomePrimeira.value == ""){
        alert("É necessário preencher o terceiro campo");
        return;
    }
    
    if(document.forms["criaNome"].sobrenomeUltima.value == ""){
        alert("É necessário preencher o quarto campo");
        return;
    }
    
    var prosseguir = confirm("Clique em 'ok' para saber seu nome de dinossauro!");
    
    if(prosseguir){
        var campo1 = document.forms["criaNome"].nomePrimeira.value;
        var campo2 = document.forms["criaNome"].nomeUltima.value;
        var campo3 = document.forms["criaNome"].sobrenomePrimeira.value;
        var campo4 = document.forms["criaNome"].sobrenomeUltima.value;
        
        campo2 = campo2.toLowerCase();
        campo3 = campo3.toLowerCase();
        campo4 = campo4.toLowerCase();
      
      var resultado = document.getElementById("resultado");
        
        var nome = campo1 + campo4 + campo3 + campo2 + "ssauro";
        resultado.innerHTML = nome;
        
    }
    else{
        alert("Dinossauro extinto!");
    }
}