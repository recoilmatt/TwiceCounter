//api

let appId = 'a2EKEhAR1KwNd5wQPVb3tIZ8dkSlMWZ3'

function twiceLoad(member) {
	q = member; // search query
	function request() {
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=a2EKEhAR1KwNd5wQPVb3tIZ8dkSlMWZ3&tag='+q, true);
}
	request();
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("twiceGif").innerHTML = '<img src = "'+data+'" class="twiceBorder" title="twice is life">';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
}


/*dahyun.onclick = function specificLoad() {
	let image = 'https://media0.giphy.com/media/l1JN7FkjsUICp5fWg/giphy.gif?cid=790b76115d1aeb724a54736a77fd1fda&rid=giphy.gif'
	document.getElementById("twiceGif").innerHTML = "<img src=" + image + " />";

}*/

// When the button click, loads the function twiceLoad to return random gifs for that specific member.


document.getElementById("random").onclick = function() {
	twiceLoad("twice+kpop");
}
document.getElementById("tzuyu").onclick = function() {
	twiceLoad("tzuyu");
}
document.getElementById("sana").onclick = function() {
	twiceLoad("sana+twice+kpop");
}
document.getElementById("nayeon").onclick = function() {
	twiceLoad("nayeon");
}
document.getElementById("chaeyoung").onclick = function() {
	twiceLoad("chaeyoung");
}
document.getElementById("jihyo").onclick = function() {
	twiceLoad("jihyo");
}
document.getElementById("jeongyeon").onclick = function() {
	twiceLoad("jeongyeon");
}
document.getElementById("momo").onclick = function() {
	twiceLoad("momo+twice");
}
document.getElementById("mina").onclick = function() {
	twiceLoad("mina+twice+kpop");
}
document.getElementById("mina").onclick = function() {
	twiceLoad("mina+twice");
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

countdown.style.fontSize = '7vh';


document.onload = twiceLoad("twice+kpop");
