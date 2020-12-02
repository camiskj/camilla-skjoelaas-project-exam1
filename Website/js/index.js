const arrowRight = document.querySelector(".arrow-right-first");
const arrowRightSecond = document.querySelector(".arrow-right-second");
const arrowLeft = document.querySelector(".arrow-left-first");
const arrowLeftSecond = document.querySelector(".arrow-left-second");
const slideHolderTwo = document.querySelector(".count-container");
const slideHolderThree = document.querySelector(".detail-wrapper");
const slideTwo = document.querySelector(".counter-slider");
const slideThree = document.querySelector(".detail-container");

arrowRight.onclick = function () {
  
    slideTwo.style.transform = "translate(-100%, 0)";
    slideHolderTwo.style.position = "fixed";
    slideHolderTwo.style.visibility = "visible";
}

arrowRightSecond.onclick = function () {
  
    slideThree.style.transform = "translate(-100%, 0)";
    slideHolderThree.style.position = "fixed";
    slideHolderThree.style.visibility = "visible";
}

arrowLeft.onclick = function () {
  
    slideThree.style.transform = "translate(0, 0)";
    slideHolderThree.style.position = "absolute";
    slideHolderThree.style.visibility = "hidden";
}

arrowLeftSecond.onclick = function () {
  
    slideTwo.style.transform = "translate(0, 0)";
    slideHolderTwo.style.position = "absolute";
    slideHolderTwo.style.visibility = "hidden";
}