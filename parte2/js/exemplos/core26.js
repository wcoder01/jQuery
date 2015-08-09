$(document).ready(function(){

	$("tbody tr:not(.sub2, .sub1)").hide();

	$(".sub1 th").prepend("<img id='img1' src='images/plus.gif' class='maismenos'/>");
	$(".sub2 th").prepend("<img id='img2' src='images/plus.gif' class='maismenos'/>");

	

	$("#img1").click(function(){
		if($(this).attr("src") == "images/minus.gif"){
			$(this).attr("src","images/plus.gif")
				.parents().siblings(".tr1").hide();

		}else{
			$(this).attr("src","images/minus.gif")
				.parents().siblings(".tr1").show();
			
		}

	});

	$("#img2").click(function(){
		if($(this).attr("src") == "images/minus.gif"){
			$(this).attr("src","images/plus.gif")
				.parents().siblings(".tr2").hide();

		}else{
			$(this).attr("src","images/minus.gif")
				.parents().siblings(".tr2").show();
			
		}

	});

});