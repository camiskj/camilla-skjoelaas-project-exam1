const url = "https://api.spacexdata.com/v4/launches/past";
const launches = document.querySelector(".launch-container");
const items = document.querySelector(".items");
const description = document.querySelector(".details-onclick");

async function getMissions() {
  try {
      const response = await fetch(url);
      const getResults = await response.json();
      launches.innerHTML = "";

      createHTML(getResults);

      const sortBy = document.querySelector(".sortby");
      sortBy.addEventListener("change", function(event){

        if(sortBy.value === "ascending") {
          getResults.sort(function(a,b){
            return a.flight_number - b.flight_number;
          })
        }

        else {

          getResults.sort(function(a,b){
            return b.flight_number - a.flight_number;
          })
        }

      createHTML(getResults);
      })

    }

  catch(error) {
    console.log("error");
    launches.innerHTML = "Something went wrong";
  }
}

getMissions();

function createHTML(data) {
  launches.innerHTML = "";
  for(let i = 0; i < data.length; i++) {

    let failOrSuccess = data[i].success;

    if(failOrSuccess) {
      failOrSuccess = `<p class="success"><span class="success-icon"><i class="las la-check-circle"></i></span> Success</p>`;

    }
    else {
      failOrSuccess = `<p class="failure"><span class="fail-icon"><i class="las la-times-circle"></i></span> Failure</p>`;
    }

    let jsonDate = new Date(data[i].date_local);
    const date = jsonDate.toLocaleDateString();

    let jsonTime = new Date(data[i].date_local);
    const time = jsonTime.toLocaleTimeString();

    launches.innerHTML += `
      <div class="items">
        <p>${failOrSuccess}</p>
        <a href="launch-details.html?id=${data[i].id}"><p class="mission">Mission <i class="las la-angle-double-right"></i></p>
        <h2 class="mission-name-upcoming">${data[i].name}</h2></a>
        <p class="launched-at">Launched at:</p>
        <p class="launch-date">${date} ${time}</p>
        <p class="flight-number"><span class="flight-number-title">Flight number</span>${data[i].flight_number}</p>
      </div>
    `;
  }
}
