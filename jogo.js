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
	var qtde_baloes = 10;
	cria_baloes(qtde_baloes);

	//Imprimir quantidade de balões inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;

	//Imprimir quantidade de balões estourados
	document.getElementById('baloes_estourados').innerHTML = 0;

}

function cria_baloes(qtde_baloes){

	for (var i = 1; i <= qtde_baloes; i++) {
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';

		document.getElementById('cenario').appendChild(balao);
	}

}