const $ = require("jquery");
const axios = require("axios").default;
const moment = require("moment");
const date = new Date();
const HRNumbers = require("human-readable-numbers");
console.log("Today is " + moment(date).format("LL"));
console.log("Main.js --> attached");
const search = require("./search");
const sort = require("./sort");

const getData = () => {
    axios.get("https://api.covid19india.org/data.json")
        .then(function (response) {
            response.data.statewise.forEach(state => {
                let cardMain = document.querySelector("#card-list");
                let cardStateData = `       
                    <div id="cardStateData" class="card-list" style="width: 18rem;">
                        <div class="card-header stateName-text">
                            ${state.state}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item activeCases">Active: ${HRNumbers.toHumanString(state.active)}</li>
                            <li class="list-group-item recovered">Recovered: ${HRNumbers.toHumanString(state.recovered)}</li>
                            <li class="list-group-item deaths">Deaths: ${HRNumbers.toHumanString(state.deaths)}</li>
                            <li class="list-group-item totalCases">Total: ${HRNumbers.toHumanString(state.confirmed)}</li>
                            <li class="list-group-item lastUpdated">Updated: ${state.lastupdatedtime.slice(0,10)}</li>
                        </ul>
                    </div>`

                cardMain.innerHTML += cardStateData;
            });
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // Function which run irrespective of Resolve or Reject
        })
}
getData();
search();
sort();