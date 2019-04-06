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
	var acc	= position.coords.accuracy;
	var alt	= position.coords.altitude;
	var altacc	= position.coords.altitudeAccuracy;
	var hea	= position.coords.heading;
	var spe	= position.coords.speed;
	
	var posinfo = 'Your location information: <ul>';
	posinfo = posinfo + '<li>latitude: ' + lat + '</li>';
	posinfo = posinfo + '<li>longitude: ' + lon + '</li>';
	posinfo = posinfo + '<li>accuracy: ' + acc + '</li>';
	posinfo = posinfo + '<li>altitude: ' + alt + '</li>';
	posinfo = posinfo + '<li>altitudeAccuracy: ' + altacc + '</li>';
	posinfo = posinfo + '<li>heading: ' + hea + '</li>';
	posinfo = posinfo + '<li>speed: ' + spe + '</li>';
	posinfo = posinfo + '</ul>';	
	$('#loc').empty().append(posinfo);
	$('#geo').css('display','none');
}
