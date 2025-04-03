document.addEventListener("DOMContentLoaded", () => {
  const monke = document.getElementById("monke");
  const sound = document.getElementById("sound");

  monke.addEventListener("click", () => {
    sound.play(); // Play preloaded sound on click
  });
});
