// Teuvo's HTML5 course
$('document').ready(function() {
    $('#geo').click(findLocation);
});

function findLocation()	{
		navigator.geolocation.getCurrentPosition(showLocation);	
}

function showLocation(position)	{
	var lat = position.coords.latitude;
	var lon	= position.coords.longitude;
	
	// Google Maps Stuff here
	var options = {
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map'),options);
	var myLocation = new google.maps.LatLng(lat,lon);
	var marker = new google.maps.Marker({
		position: myLocation,
		map: map,
		title: "This is my location"	
	});
	map.setCenter(myLocation);
}
