const topArrow = document.querySelector(".top-navigator");

function toTheTop() {
  const scrolledY = window.scrollY;

  if (scrolledY > 500) {
    topArrow.style.display = "block";
  }
  else {
    topArrow.style.display = "none";
  }
}

window.onscroll = toTheTop;
