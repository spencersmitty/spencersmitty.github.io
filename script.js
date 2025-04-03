document.addEventListener("DOMContentLoaded", () => {
  const monke = document.getElementById("monke");

  // Preload the audio
  const audio = new Audio('media/ow.wav');
  audio.load(); // This will preload the audio

  monke.addEventListener("click", () => {
    audio.play(); // Play sound on click
  });
});
