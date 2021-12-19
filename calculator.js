//Inserindo valores no input

function valores(num){ //Chama a função valores e cria um parâmetro para os números que serão inseridos

    var insert = document.getElementById('input').innerHTML; //Variável que pega o conteúdo pelo id do input
    document.getElementById('input').innerHTML = insert + num; //Como mostrar o conteúdo ao clicar no botão, usa-se o innerHTML para adicionar o que está armazenado na variável concatenando com o próximo valor

}

function limpar(){ //função que limpa o input
    document.getElementById('input').innerHTML = " "; //deixe o innerHTML vazio para limpar ao clicar 
}

function back(){    //função que exclui os caracteres 1 po 1
    var resultado = document.getElementById('input').innerHTML;    //Variável que pega o conteúdo pelo id do input
    document.getElementById('input').innerHTML = resultado.substring(0, resultado.length -1) //Usando o método substring(), podemos manipular os caracteres dentro do input. No caso, queremos que exclua 1 po 1, o método lenght tem o intuito de considerar a quantidade toda de caracteres
}                                                                                      //O -1 está dizendo que a cada caracter, diminui 1.                 

function cal(){ //função que calcula
    var resultado = document.getElementById('input').innerHTML;  //Variável que pega o conteúdo pelo id do input
    
    if(resultado){ //verificação se o nosso parágrafo tem conteúdo ou não
        document.getElementById('input').innerHTML = eval(resultado);  //função eva() pega os valores em string do nosso parágrafo pelo id, e converte em linguagem de máquina, transfromando - o em valores computacionais
    }
    else{
        document.getElementById('input').innerHTML = 'Não foi possível calcular';
    }                                                                   //estes valores se tornam calculáveis 
}