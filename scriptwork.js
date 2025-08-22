const yesToggleLabel = document.getElementById("yesToggle");
const lamaolah = document.getElementById("lamaolah");
const yesCheckbox = yesToggleLabel.querySelector('input[type="checkbox"]');
const yeslajar = document.getElementById("yeslajar");
const belajarmore = document.getElementById("belajarmore");
const yesbelajar = yeslajar.querySelector('input[type="checkbox"]');
const yessosial = document.getElementById("yessosial");
const sosialmore = document.getElementById("sosialmore");
const sosialok = yessosial.querySelector('input[type="checkbox"]');

yesCheckbox.addEventListener("change", function() {
  if (this.checked) {
    lamaolah.classList.add("show");
  } else {
    lamaolah.classList.remove("show");
  }
});

yesbelajar.addEventListener("change", function() {
    if (this.checked) {
        belajarmore.classList.add("show");
    } else {
        belajarmore.classList.remove("show");
    }
  });

  sosialok.addEventListener("change", function() {
    if (this.checked) {
        sosialmore.classList.add("show");
    } else {
        sosialmore.classList.remove("show");
    }
  });