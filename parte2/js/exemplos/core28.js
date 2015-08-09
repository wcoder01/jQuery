$(document).ready(function(){

	$(".toggle").change(function(){

		if(this.checked){
			$(":checkbox").prop('checked', true);
			
		}else{
			$(":checkbox").prop('checked', false);
		}
	});


	$(".tudo").click(function(){
		$(":checkbox").prop('checked', true);
		return false;

	});

	$(".nada").click(function(){
		$(":checkbox").prop('checked', false);
		return false;

	});

});