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

//Remove images on double click
const images = Array.from(document.getElementsByTagName("img"));

images.forEach(i => {
  i.addEventListener("dblclick", e => {
    i.style.display = "none";
  });
});

//Highlight event for all text
let text = Array.from(document.getElementsByTagName("p"));
const headers = Array.from(document.getElementsByTagName("h2"));
text = text.concat(headers);

text.forEach(t => {
  t.addEventListener("mouseover", e => {
    t.style.color = "red";

    setTimeout(() => {
      t.style.color = "black";
    }, 200);
  });
});

//On load welcome message
window.addEventListener("load", e => {
  alert("Page has loaded!");
});

//Log window size on resize
window.addEventListener("resize", e => {
  alert(`Height: ${window.innerHeight}, Width: ${window.innerWidth}`);
});

//Button Event, logs title of parent element
const buttons = Array.from(
  document.querySelector(".content-pick").querySelectorAll(".btn")
);

buttons.forEach(b => {
  b.addEventListener("click", e => {
    let title = b.parentElement.getElementsByTagName("h4")[0].innerText;
    alert(`You Selected: ${title}`);
  });
});

//Change title on hover
const title = document.querySelector(".logo-heading");
title.addEventListener("mouseover", e => {
  title.textContent = "The Best Bus";
});

title.addEventListener("mouseout", e => {
  title.textContent = "Fun Bus";
});
