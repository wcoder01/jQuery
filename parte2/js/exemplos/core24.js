$(document).ready(function(){

	//colocar um sinal de mais na coluna e mudar a seta do mouse
	$("#filmes thead tr th")
		.not("th:first-child") //nao aplica na primeira coluna
		.prepend("<span>+</span>")
		.css("cursor", "pointer");

	// each passa a posicao do elemento (i)
	$("#filmes thead tr th").each(function(i){
		var n = i - 1; // nao funcionar na primeira coluna

		//thead
		$(this).click(function(){
			$("td").removeClass("destaque");

				//buscar a tr do tbody
			$(this)
			.not("th:first-child")
			.parents("thead")
			.siblings("tbody")
			.children("tr").each(function(){
				$(this)
				.children("td:eq("+n+")")
				.addClass("destaque");
			});
		});
	});
});