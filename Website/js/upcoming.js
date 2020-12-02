const url = "https://api.spacexdata.com/v4/launches/upcoming";
const infoBox = document.querySelector("#infobox");
const nextMission = document.querySelector(".name-of-next-mission");
const h1 = document.querySelector("h1");

async function upcomingLaunch() {
  try {
      const response = await fetch(url);
      const next = await response.json();

      let missingDetails = "No description available";

      if (next.details) {
          missingDetails = next.details;
      }

      h1.innerHTML += `
        <p class="h1-mission-name">${next[0].name}</p>`;

      nextMission.innerHTML += `
        <h2 class="hide-on-desktop">${next[0].name}</h2>
        <p class="h2-secondslide">Launches in</span></p>`;

      infoBox.innerHTML += `
        <p class="mission-name-upcoming">${next[0].name}</p>
        <p class="front-detail-text">${missingDetails}</p>
      `;

    }

  catch(error) {
    console.log("error");
    nextMission.innerHTML = "Something went wrong";
  }
}

upcomingLaunch();
