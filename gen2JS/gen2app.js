$(document).ready(function() {
	console.log("Hi there! This website was created by createhard.com  Hope you like it!");
	$("#info-bar").css("width", $("body img").width());
	$(window).resize(function(){
		$("#info-bar").css("width", $("body img").width());
	});

});