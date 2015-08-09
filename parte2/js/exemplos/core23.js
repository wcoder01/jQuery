$(document).ready(function(){

	$("#filmes tbody tr:odd").addClass("impar");

	// destaca quando o mouse passa emcima
	$("#filmes tbody tr").hover(
		function(){$(this).addClass("destaque");},
		function(){$(this).removeClass("destaque");}

		);

});