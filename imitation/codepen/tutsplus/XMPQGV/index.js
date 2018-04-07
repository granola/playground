(function() {

  const target = document.querySelector(".target");
  const links = document.querySelectorAll(".mynav a");
  const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

function mouseenterFunc() {
    console.log("hoge")
  if (!this.parentNode.classList.contains("active")) {
    console.log("hoge")
  }
}

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }
})();
