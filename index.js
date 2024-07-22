window.addEventListener("scroll", function () {
  let navbar = document.getElementById("menubar");

  if (window.pageYOffset >= 625.75) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
