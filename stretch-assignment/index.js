// document.getElementById("myRedDIV").style.order = "4";

let blockParent = document.querySelector(".blocks");

const initialize = () => {
  let blockList = document.getElementsByClassName("block");
  let updatedList = Array.from(blockList);
  updatedList.forEach((b, index) => {
    b.addEventListener("click", e => {
      updatedList.splice(index, 1);
      updatedList.unshift(b);
      console.log(updatedList);
      updateHTML(updatedList);
      console.log(updatedList[0]);
    });
  });

  let amount = 30;
  let initial = 0;

  //Rocket Functionality
  updatedList.forEach((b, index) => {
    let moveInterval;
    b.addEventListener("mousedown", e => {
      moveInterval = setInterval(() => {
        e.stopPropagation();
        initial += amount;
        b.style.transform = "translateX(" + initial + "px)";
      }, 500);
    });

    b.addEventListener("mouseup", e => {
      initial = 0;
      e.stopPropagation();
      clearInterval(moveInterval);
    });
  });
};

const updateHTML = updatedList => {
  blockParent.innerHTML = `
        ${updatedList[0].outerHTML}${updatedList[1].outerHTML}${updatedList[2].outerHTML}${updatedList[3].outerHTML}${updatedList[4].outerHTML}
    `;
  initialize();
};

initialize();
