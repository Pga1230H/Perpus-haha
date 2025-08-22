const button = document.getElementById("button");
const text = document.getElementById("text");
const container = document.getElementById("container");
const newBox = document.getElementById("newBox");
const aboutUs = document.getElementById("abt");
const infobox = document.getElementById("infobox");

button.addEventListener("click", (e) => {
  e.preventDefault();              
  button.style.display = "none";  
  text.style.display = "none";     
  container.classList.add("glass");

  newBox.style.display = "flex";
});

aboutUs.addEventListener("click", (e) => {
  e.preventDefault();              
  aboutUs.style.display = "none";  
  text.style.display = "none";     
  container.classList.add("glass");

  infobox.style.display = "flex";
});