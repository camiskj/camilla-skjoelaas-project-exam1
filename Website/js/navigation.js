const menuBtn = document.querySelector(".menu-btn");
const slider = document.querySelector(".sliding-in");
const nav = document.querySelector(".navigation");
const mask = document.querySelector("#page-mask");
const spaceX = document.querySelector(".spaceX");
const spaceXLink = document.querySelector(".spaceX a:link");

function toggleNav() {
  if(menuBtn.innerHTML === `Close <i class="las la-times"></i>`) {
    slider.style.transform = "translate(0, 0)";
    menuBtn.innerHTML = `<i class="las la-bars"></i>`;
    menuBtn.style.backgroundColor = "#FECA71";
    menuBtn.style.color = "#000";
    nav.style.position = "absolute";
    nav.style.visibility = "hidden";
    mask.style.display = "none";
    spaceX.style.transform = null;
    spaceXLink.style.color = "#fff";
  }
  else {
    slider.style.transform = "translate(-100%, 0)";
    menuBtn.innerHTML = `Close <i class="las la-times"></i>`;
    menuBtn.style.backgroundColor = "#944455";
    menuBtn.style.color = "#fff";
    nav.style.position = "fixed";
    nav.style.visibility = "visible";
    mask.style.display = "block";
    spaceX.style.transform = "rotate(360deg)";
    spaceXLink.style.color = "#944455";
  }
}

menuBtn.onclick = toggleNav;
