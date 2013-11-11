$(document).ready(function(){
	$('#get_color').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: "/color",
			type: "post"
		}).done(function(response){
			console.log("Inside done function.");
			$("#color_me > :nth-child("+response.cell+")").css('background-color', response.color)
		}).fail(function(){
			console.log("Inside fail function.");
		})
	})
});