function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active-section");
  });
  document.getElementById(sectionId).classList.add("active-section");
}

function start() {
  alert("Start button clicked!");
}
