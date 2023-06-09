//pageup-button

const pageUp = document.querySelector(".page-up");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    pageUp.style.display = "flex";
    pageUp.style.visibility =  "visible";
  } else {
    pageUp.style.display = 'none';
  }
});

//div 6 table switch

const visibleTable = document.querySelector(".div6_visible")
const hiddenTable = document.querySelector(".div6_hidden")
const switchButton = document.querySelector(".div6_switch");
const title = document.querySelector(".d6farms");

function switchTable() {
  if (visibleTable.style.display === "none") {
    visibleTable.style.display = "grid";
    hiddenTable.style.display = "none";
    title.textContent = "Farms";

  } else {
    visibleTable.style.display = "none";
    hiddenTable.style.display = "grid";
    title.textContent = "Syrup Pools";
  }
}

switchButton.addEventListener("click", switchTable);

setInterval(switchTable, 5000);

//