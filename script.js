document.addEventListener("DOMContentLoaded", () => {
  const monke = document.getElementById("monke");

  monke.addEventListener("click", () => {
    const audio = new Audio('media/ow.wav'); // Path to the "ow.wav" file in the "media" folder
    audio.play(); // Play sound on click
  });
});
