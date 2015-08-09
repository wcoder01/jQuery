$(document).ready(function () {
	
	// esconder clicando no primeiro span
	$("span:eq(0)").click(function(){
		$("p").hide(3000); // normal, fast, slow or milliseconds
	});

	// mostar clicando no segundo span
	$("span:eq(1)").click(function(){
		$("p").show("slow"); // normal, fast, slow or milliseconds
	});

	// mostar e esconder clicando no terceiro span
	$("span:eq(2)").click(function(){
		$("p").toggle(2000); // normal, fast, slow or milliseconds
	});
});