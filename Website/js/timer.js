const counter = document.querySelector(".counter");
const countDown = new Date("Dec 10, 2020 17:19:00").getTime();

setInterval(function() {
  const timeNow = new Date().getTime();
  const difference = countDown - timeNow;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  counter.innerHTML = `
    <div class="count-contain">
      <p class="count-number">${days}</p>
      <p class="count-text">days</p>
    </div>
    <div class="count-contain">
      <p class="count-number">${hours}</p>
      <p class="count-text">hours</p>
    </div>
    <div class="split-counter"></div>
    <div class="count-contain">
      <p class="count-number">${minutes}</p>
      <p class="count-text">minutes</p>
    </div>
    <div class="count-contain">
      <p class="count-number">${seconds}</p>
      <p class="count-text">seconds</p>
    </div>
    `;

}, 1000);
