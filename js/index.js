// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");

//Adds a hover effect to each nav link
navLinks.forEach(l => {
  l.addEventListener("mouseover", e => {
    l.style.color = "red";
    setTimeout(() => {
      l.style.color = "gray";
    }, 500);
  });
});

//Logs the key pressed
window.addEventListener("keydown", e => {
  alert(e.key);
});

//Change background on scroll with back and forth switch
let switchNum = 0;
window.addEventListener("wheel", e => {
  if (switchNum === 0) {
    document.body.style.background = "white";
    switchNum = 1;
  } else {
    document.body.style.background = "blue";
    switchNum = 0;
  }
});
