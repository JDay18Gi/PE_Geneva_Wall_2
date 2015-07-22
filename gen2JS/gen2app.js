$(document).ready(function() {

	// For the Width of the info-section
	console.log("Hi there! This website was created by createhard.com  Hope you like it!");
	$("#info-bar").css("width", $("body img").width());
	$(window).resize(function(){
		$("#info-bar").css("width", $("body img").width());
	});

	// Google Map on #map-page
	function initialize() {
		var mapOptions = {
			center: { lat: -34.397, lng: 150.644},
			zoom: 8
		};

		var map = new google.maps.Map(document.getElementById('google-map'),
		mapOptions);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
});