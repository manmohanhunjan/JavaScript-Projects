const vod = document.querySelector("#media");
const btnDelegation = document.querySelector("#btnContainer");

btnDelegation.addEventListener("click", (event) => {
  let selectedBtn = event.target.id;
  const outcome =
    selectedBtn === "play"
      ? vod.play()
      : selectedBtn === "pause"
      ? vod.pause()
      : selectedBtn === "stop"
      ? vod.stop()
      : selectedBtn === "mute"
      ? (vod.muted = true)
      : selectedBtn === "unmute"
      ? (vod.muted = false)
      : selectedBtn === "replay"
      ? (vod.currentTime = 0)
      : selectedBtn === "stop"
      ? vod.stop()
      : selectedBtn === "volumeUp"
      ? (vod.volume += 0.1)
      : selectedBtn === "volumeDown"
      ? (vod.volume -= 0.1)
      : alert("no button clicked");

      return outcome;
});

vod.addEventListener("pause", () => {
  const p = document.querySelector("#demo");
  p.textContent = "pause clicked";
});
vod.addEventListener("seeking", () => {
  const p = document.querySelector("#demo");
  p.textContent = "seeking";
});
vod.addEventListener("volumechange", () => {
  const p = document.querySelector("#demo");
  p.textContent = "Volume Changed";
});
vod.addEventListener("play", () => {
  const p = document.querySelector("#demo");
  p.textContent = "play clicked";
});
vod.addEventListener("ended", () => {
  const p = document.querySelector("#demo");
  p.textContent = "video ended";
});
vod.addEventListener("timeupdate", () => {
  const p = document.querySelector("#demo1");
  p.textContent = "my video" + vod.currentTime;
});
vod.addEventListener("loadedmetadata", () => {
  alert("metadata loaded");
  alert("video duration: " + vod.duration);
});
vod.addEventListener("seeked", () => {
  const p = document.querySelector("#demo2");
  p.textContent = "my video seeked : " + vod.currentTime;
});
