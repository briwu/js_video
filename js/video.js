var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	video.volume = 1;
	video.muted = false;
	var volumeElement = document.querySelector("#volume");

	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		video.volume = 1;
    	volumeElement.textContent = video.volume * 100 + "%";
	});

	document.querySelector("#pause").addEventListener("click", function () {
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate -= 0.1;
		console.log((video.playbackRate * 100).toFixed(0));
	});

	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate += 0.1;
		speed += 0.1;
		console.log((video.playbackRate * 100).toFixed(0));
	});

	document.querySelector("#skip").addEventListener("click", function () {
		video.currentTime += 10;
		if (video.currentTime > video.duration) {
			video.currentTime = 0;
		}
		console.log(video.currentTime.toFixed(2));
	});

	document.querySelector("#mute").addEventListener("click", function () {
		video.muted = !video.muted;
		document.querySelector("#mute").textContent = video.muted ? "Unmute" : "Mute";
	});

	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		volumeElement.textContent = video.volume * 100 + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});
