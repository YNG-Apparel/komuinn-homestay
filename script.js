var slides = document.querySelectorAll(".slide");
console.log(slides);
var buttons = document.querySelectorAll(".slider-btn");
console.log(buttons);
let currentSlide = 1;
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = 1;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");

  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeslide) {
        activeslide.classList.remove("active");
      });
      console.log(slides);

      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
var codingProjects = document.querySelectorAll(".project");

codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 300;
  [0, 1, 2, 3];
});
AOS.init({
  once: true,
});
