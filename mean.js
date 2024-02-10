function openPopup() {
  document.getElementById("popup-overlay").style.display = "block";
  setTimeout(function () {
    document.getElementById("popup-overlay").style.opacity = "1";
  }, 50); // Adding a slight delay to allow smooth transition
}

function closePopup() {
  document.getElementById("popup-overlay").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("popup-overlay").style.display = "none";
  }, 500); // Wait for transition to complete before hiding
}
