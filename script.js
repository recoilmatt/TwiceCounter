//api

let appId = 'a2EKEhAR1KwNd5wQPVb3tIZ8dkSlMWZ3'

document.addEventListener('DOMContentLoaded', function () {
	q = "twice kpop"; // search query

	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=a2EKEhAR1KwNd5wQPVb3tIZ8dkSlMWZ3&limit=30&tag='+q, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("twiceGif").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});


/*function twiceBias() {
	q = 'dahyun';

	var queryURL = 'http://api.giphy.com/v1/gifs/random?api_key=a2EKEhAR1KwNd5wQPVb3tIZ8dkSlMWZ3&tag='+q'

	document.getElementById("twiceGif").innerHTML = "test";


}*/

dahyun.onclick = function() {
	let image = 'https://media0.giphy.com/media/l1JN7FkjsUICp5fWg/giphy.gif?cid=790b76115d1aeb724a54736a77fd1fda&rid=giphy.gif'
	document.getElementById("twiceGif").innerHTML = "<img src=" + image + " />";

}



// Set the date we're counting down to
var countDownDate = new Date("Jul 17, 2019 19:30:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown">=
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//styling

countdown.style.fontSize = '10vh';
