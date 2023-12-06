const btnUndangan = document.querySelector("#lihat-undangan");
const audioIkon = document.querySelector(".audio-icon-wrapper");
const audio = document.querySelector("#song");
let playingSong = false;

btnUndangan.addEventListener("click", () => {
  audio.play();
  playingSong = true;
  setInterval(() => {
    audioIkon.classList.remove("hidden");
  }, 500);
});

audioIkon.onclick = () => {
  playingSong
    ? (audio.pause(),
      audioIkon.firstElementChild.classList.add("hidden"),
      audioIkon.lastElementChild.classList.remove("hidden"))
    : (audio.play(),
      audioIkon.firstElementChild.classList.remove("hidden"),
      audioIkon.lastElementChild.classList.add("hidden"));
  playingSong = !playingSong;
};
