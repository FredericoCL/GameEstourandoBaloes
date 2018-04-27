//Variável que armazena a chamada da função timeOut
var timerId = null;

function iniciaJogo() {

	var url = window.location.search;
	var nivel_jogo = url.replace("?", "");

	var tempo_segundos = 0;

	//1 Nível Fácil -> 90 Segundos
	if (nivel_jogo == 1) {
		tempo_segundos = 90;
	}	

	//2 Nível Normal -> 60 Segundos
	if (nivel_jogo == 2) {
		tempo_segundos = 60;
	}

	//3 Nível Difícil -> 30 Segundos
	if (nivel_jogo == 3) {
		tempo_segundos = 30;
	}

	//Inserindo os Segundos (o contador) no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//Quantidade de Balões no Cenário do Jogo
	var qtde_baloes = 80;
	cria_baloes(qtde_baloes);

	//Imprimir quantidade de balões inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;

	//Imprimir quantidade de balões estourados
	document.getElementById('baloes_estourados').innerHTML = 0;

	//Inserindo dinâmica ao cronômetro
	contagem_tempo(tempo_segundos + 1)

}

function contagem_tempo(segundos){

	segundos = segundos - 1;

	if(segundos == -1){
		clearTimeout(timerId); //Para a execução da função do settimeout
		game_over();
		return false;
	}

	document.getElementById('cronometro').innerHTML = segundos;
	timerId = setTimeout("contagem_tempo("+segundos+")", 1000);

}

function game_over(){
	remove_eventos_baloes();
	alert('Game Over! Você não conseguiu estourar todos os Balões a Tempo!')
}

function cria_baloes(qtde_baloes){

	for(var i = 1; i <= qtde_baloes; i++){

		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '12px';
		balao.id = 'b'+i;
		balao.onclick = function(){ estourar(this); };

		document.getElementById('cenario').appendChild(balao);
	}

}

function estourar(e){

	var id_balao = e.id;

	document.getElementById(id_balao).setAttribute("onclick", "");
	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

	pontuacao(-1);

}

function pontuacao(acao){

	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados  = document.getElementById('baloes_estourados').innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;

	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

	situacao_jogo(baloes_inteiros);

}

function situacao_jogo(baloes_inteiros){

	if (baloes_inteiros == 0) {
		parar_jogo();
		alert('Parabéns! Você conseguiu estourar todos os Balões a Tempo!');
		
	}

}

function parar_jogo(){
	clearTimeout(timerId);
}

function remove_eventos_baloes() {
    var i = 1; //Contador para recuperar balões por id
    
    /*Percorre o lementos de acordo com o id e só irá sair do laço quando 
    não houver correspondência com elemento*/
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; //faz a iteração da variávei i
    }
}