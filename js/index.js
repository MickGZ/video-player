const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

play.addEventListener("click", handlePlay);
pause.addEventListener("click", handlePause);
backward.addEventListener("click", handleBackward);
forward.addEventListener("click", handleForward);

function handlePlay() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
}

function handlePause() {
  video.pause();
  pause.hidden = true;
  play.hidden = false;
}

function handleBackward() {
  video.currentTime = video.currentTime - 10;
}

function handleForward() {
  video.currentTime = video.currentTime + 10;
}

// Handle the
const progress = document.querySelector("#progress");
video.addEventListener("loadedmetadata", handleLoaded);
video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  // assign the duration of the video to the range element
  progress.max = video.duration;
}

function handleTimeUpdate() {
  progress.value = video.currentTime;
}

progress.addEventListener("input", handleInput);

// assign the current value of the bar to the video
function handleInput() {
  video.currentTime = progress.value;
}
