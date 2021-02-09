// Update the image and text for the track
function updateImage(url,track, trackUrl,artist,artistUrl,album, listening){
	current = trackUrl;
	console.log("check!");
	$("#pic1").attr("src", url);
	$('#description').html(track + "<br /><b>" + artist +"</b><br />" + album);
}