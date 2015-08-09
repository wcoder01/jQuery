$(document).ready(function(){
	
	$(":input + span").css({
		display: "none",
		border: "1px solid #000",
		padding: "2px 4px",
		background: "#DDD",
		marginLeft: "10px"
	});

	$(":input").focus(function(){
		$(this).next().fadeIn(1500);
	}).blur(function(){
		$(this).next().fadeOut(1500);
	});

});