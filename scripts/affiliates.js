var detailsButton = document.getElementsByClassName("faqtoggle");
var hiddenRow = document.getElementsByClassName("faq_hiddenrow");

detailsButton.addEventListener("click", function() {
  if (hiddenRow.style.display === "none") {
    hiddenRow.style.display = "flex";
    detailsButton.innerHTML = "Hide";
  } else {
    hiddenRow.style.display = "none";
    detailsButton.innerHTML = "Details";
  }
});