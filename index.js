let box = document.getElementById("box");
let inputColour = document.getElementById("inputColour");
let inputRadius = document.getElementById("inputRadius");

inputColour.addEventListener("input", () => {
  box.style.background = inputColour.value;
});

inputRadius.addEventListener("input", () => {
  box.style.borderRadius = inputRadius.value;
});
