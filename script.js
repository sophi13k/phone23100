function showAll(){
  document.querySelectorAll(".card").forEach(el => el.style.display = "block");
}

function showNew(){
  document.querySelectorAll(".card").forEach(el => {
    el.style.display = el.classList.contains("new") ? "block" : "none";
  });
}

function showUsed(){
  document.querySelectorAll(".card").forEach(el => {
    el.style.display = el.classList.contains("used") ? "block" : "none";
  });
}
