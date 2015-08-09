$(document).ready(function(){

		$(".numeros").bind("keydown", function(e){		//objeto event

			var keyCode = e.which;

			// codigo das teclas nunericas do teclado 47 ate 58
			var isStandard = (keyCode > 47 && keyCode < 58);
			var isOther = (",8,46,37,38,39,40,".indexOf("," + keyCode + ",") > -1);

			if(isStandard || isOther){
				return true;
			}else{
				return false;
			}
			




		});
});


/*
8 = backspace
46 = delete
37 = esquerda
38 = direita
39 = acima
40 = abaixo

*/