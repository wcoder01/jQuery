$(document).ready(function(){

	//adicionar nova classe as linhas impares
	//$("#filmes tbody tr:odd").addClass("impar");

	//seletor que indica o elemento com criterios, indice inicia em 1
	//$("#filmes tbody tr:nth-child(3)").addClass("impar");

	//passar uma equação x = an + b
	//2n (par) - 2*0 = 0, 2*1=2, 2*2=4, etc
	//2n+1 (impar), 3n+1(de 3 em 3)
	$("#filmes tbody tr:nth-child(4n-1)").addClass("impar");
	$("#filmes tbody tr:nth-child(4n)").addClass("impar");

});