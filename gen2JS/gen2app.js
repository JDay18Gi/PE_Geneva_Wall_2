$(document).ready(function() {

	// For the Width of the info-section
	console.log("Hi there! This website was created by createhard.com  Hope you like it!");
	$("#info-bar").css("width", $("body img").width());
	$(window).resize(function(){
		$("#info-bar").css("width", $("body img").width());
	});

	// Google Map on #map-page
	var map;
	function initialize() {
		var myLatlng = new google.maps.LatLng(46.200517, 6.145845);
		var mapOptions = {
			zoom: 13,
			center: myLatlng
		};

		map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

		var infoString = "Reformation wall"+"\n Geneva, Switzerland";

		var infowindow = new google.maps.InfoWindow({
			content: infoString
		});

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Reformation Wall'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});