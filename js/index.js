var typed = new Typed("#element", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
});

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
