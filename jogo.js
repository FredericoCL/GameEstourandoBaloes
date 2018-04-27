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

}