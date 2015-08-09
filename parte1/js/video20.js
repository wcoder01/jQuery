$(document).ready(function () {
	
	$("span:eq(0)").click(function(){

		//$("p").fadeOut(2000); // fica transparente

		//$("p").fadeIn(2000); // retorna visibilidade

		//$("p").fadeTo(1000, 0.3); //30% de opacidade

		$("p").fadeToggle(1000); // alterna enttre transparente e visivel

	});


	$("span:eq(1)").click(function(){

		//$("p").slideUp(2000); // fecha em formato de curtina para cima

		//$("p").slideDown(2000); // efeiro de abrir a curtina.

		$("p").slideToggle(2000); // abrir e fechar


	});


});