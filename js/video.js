var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	video.classList.add("oldSchool");

	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		updateVolumeInfo();
	});

	document.querySelector("#pause").addEventListener("click", function () {
		video.pause();
	});

	var speed = 1.0;

	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate -= 0.1;
		speed -= 0.1;
		logSpeed();
	});

	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate += 0.1;
		speed += 0.1;
		logSpeed();
	});

	document.querySelector("#skip").addEventListener("click", function () {
		video.currentTime += 10;
		if (video.currentTime > video.duration) {
			video.currentTime = 0;
		}
		logCurrentLocation();
	});

	var isMuted = false;

	document.querySelector("#mute").addEventListener("click", function () {
		isMuted = !isMuted;
		video.muted = isMuted;
		updateMuteButton();
	});

	document.querySelector("#slider").addEventListener("input", function () {
		var volume = this.value / 100;
		video.volume = volume;
		updateVolumeInfo();
	});

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});

function logSpeed() {
	console.log("Current Speed: " + (video.playbackRate * 100).toFixed(0) + "%");
}

function logCurrentLocation() {
	console.log("Current Video Location: " + video.currentTime.toFixed(2) + " seconds");
}

function updateVolumeInfo() {
	console.log("Current Volume: " + (video.volume * 100).toFixed(0) + "%");
}

function updateMuteButton() {
	document.querySelector("#mute").textContent = isMuted ? "Unmute" : "Mute";
}

