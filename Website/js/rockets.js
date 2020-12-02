const url = "https://api.spacexdata.com/v4/rockets";
const rockets = document.querySelector(".rocket-container");

async function getRockets() {
  try {
      const response = await fetch(url);
      const data = await response.json();
      createHTML(data);
    }

  catch(error) {
    console.log("error");
    rockets.innerHTML = "Something went wrong";
  }
}

getRockets();

function createHTML(data) {
  rockets.innerHTML = "";

  for(let i = 0; i < data.length; i++) {

    let active = data[i].active;

    if(active) {
      active = `<span class="fail-or-success-icon"><i class="las la-check-circle"></i></span> Active`;

    }
    else {
      active = `<span class="fail-or-success-icon"><i class="las la-times-circle"></i></span> Not active`;
    }

    rockets.innerHTML += `
      <div class="rocket-items">
        <p class="active-or-not">${active}</p>
        <h2 class="rocket-name">${data[i].name}</h2>
        <p>${data[i].description}</p>
        <p class="success-rate"><span class="success-rate-title">Successrate</span>${data[i].success_rate_pct}%</p>
        <div class="rocket-facts">
          <p>First flight: ${data[i].first_flight}</p>
          <p>Cost per launch: $${data[i].cost_per_launch}</p>
          <p>Height: ${data[i].height.meters} m</p>
          <p>Diameter: ${data[i].diameter.meters} m</p>
          <p>Mass: ${data[i].mass.kg} kg</p>
        </div>
      </div>
  `;
  }
}
