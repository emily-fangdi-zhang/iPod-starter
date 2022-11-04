// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var volume = 3;
var input = document.getElementById("time-elapsed").value;
var t = parseInt(input);
var i = 6;
var total = 9;

function init() {
	for(let i = 0; i < 6; i++) {
		let id = "vl" + String(i);
		let elem = document.getElementById(id);
		volLevels.push(elem);
	}
	for(let i = 0; i < volume; i++){
		volLevels[i].style.backgroundColor = "#9f5cc4";
	}
};

function volUp() {
	volume += 1;
	if (volume < 7){
		for(let i = 0; i < volume; i++){
			volLevels[i].style.backgroundColor = "#9f5cc4";
		}
	} else {
		//alert("Maximum volume reached");
		volume -= 1;
	}
}

function volDown() {
	volume -= 1;
	console.log(volume);

	for(let i = 0; i < 6; i++){
		volLevels[i].style.backgroundColor = "white";
	}

	if (volume >= 0){
		for(let i = 0; i < volume; i++){
			volLevels[i].style.backgroundColor = "#9f5cc4";
		}
	} else {
		//alert("Minimum volume reached");
		volume += 1;
	}
}

function switchPlay() {
	let elem = document.getElementById("player-time");
	var timer = null;

	if (elem.ariaChecked == 'false'){
		document.getElementById("player-time").innerHTML = "pause";
		document.getElementById("player-time").setAttribute('aria-checked', 'true');
	} else{
		document.getElementById("player-time").innerHTML = "play_arrow";
		document.getElementById("player-time").setAttribute('aria-checked', 'false');
	}

	timer = setInterval(playback, 1000);

	function playback() {
		if(elem.ariaChecked == 'true'){
			t = parseInt(document.getElementById("time-elapsed").value);
			if(t < 180) {
				t += 1;
				document.getElementById("time-total").innerHTML = secondsToMs(t);
				document.getElementById("time-elapsed").value = String(t);
			} else {
				t = 0;
				document.getElementById("time-elapsed").value = String(t);
				nextSong();
			}
		} else {
			clearInterval(timer);
		}
	}
	console.log(t);
}

function nextSong() {
	if (i < total) {
		t = 0;
		document.getElementById("time-total").innerHTML = secondsToMs(t);
		document.getElementById("time-elapsed").value = String(t);
		i ++;
		document.getElementById("player-song-name").innerHTML = tracklist[i];
	} else {
		t = 0;
		document.getElementById("time-total").innerHTML = secondsToMs(t);
		document.getElementById("time-elapsed").value = String(t);
		i = 0;
		document.getElementById("player-song-name").innerHTML = tracklist[i];
	}
}

function prevSong() {
	if (i > 0) {
		t = 0;
		document.getElementById("time-total").innerHTML = secondsToMs(t);
		document.getElementById("time-elapsed").value = String(t);
		i --;
		document.getElementById("player-song-name").innerHTML = tracklist[i];
	} else {
		t = 0;
		document.getElementById("time-total").innerHTML = secondsToMs(t);
		document.getElementById("time-elapsed").value = String(t);
		i = 9;
		document.getElementById("player-song-name").innerHTML = tracklist[i];
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();