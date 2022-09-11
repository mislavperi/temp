function openHeader() {
  const element = document.getElementsByClassName("pop-menu");

  if (getComputedStyle(element[0])["display"] === "none") {
    element[0].style.display = "flex";
  } else {
    element[0].style.display = "none";
  }
}

setInterval(function () {
  const countDownDate = new Date("May 12, 2023 18:00:00").getTime();

  const now = new Date().getTime();

  const distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // odbrojavanje zavrseno
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "TEHNOLOGIJADA JE POČELA";
  }
}, 1000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementById("slider").children;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
