const detailContainer = document.querySelector("#infobox");
const navigator = document.querySelector(".navigator");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url_details = "https://api.spacexdata.com/v4/launches/" + id;

async function getDetails() {
  try {
      const response = await fetch(url_details);
      const launchDetails = await response.json();
      createHtml(launchDetails);
  }

  catch(error) {
      console.log("error");
      detailContainer.innerHTML = "Something went wrong";
  }
}

getDetails();

function createHtml(launchDetails) {
    document.title += ` | ${launchDetails.name}`;
    navigator.innerHTML += `${launchDetails.name}`;

    let missingDetails = "No description available";

    if (launchDetails.details) {
        missingDetails = launchDetails.details;
    }

    let jsonDate = new Date(launchDetails.date_local);
    const date = jsonDate.toLocaleDateString();

    let jsonTime = new Date(launchDetails.date_local);
    const time = jsonTime.toLocaleTimeString();

    detailContainer.innerHTML = `
        <div class="mission-info">
            <h1 class="h1-details-mission-name"><span class="h1-details">Details</span>${launchDetails.name}<img src="${launchDetails.links.patch.small}"></h1>
            <p class="launched-at">Launched at:</p>
            <p class="launch-date">${date} ${time}</p>
            <p>${missingDetails}</p>
            <p class="launch-details-links"><a href="${launchDetails.links.webcast}" title="Watch on YouTube" target="_blank"><i class="lab la-youtube"></i></a>
            <a href="${launchDetails.links.article}" title="Read article" target="_blank"><i class="las la-newspaper"></i></a></p>
        </div>
    `;
}
